interface Env {}

const NETEASE_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) sauto-7.5.0.3329 Safari/537.36 NeteaseMusicDesktop/2.10.2.200154',
  Referer: 'https://music.163.com/',
  'Content-Type': 'application/x-www-form-urlencoded',
};

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, X-Netease-Params, X-Netease-Cookie',
  };
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
      ...corsHeaders(),
    },
  });
}

function errorResponse(message: string, status = 500): Response {
  return json({ success: false, error: message }, status);
}

function joinArtists(artists: unknown): string {
  if (!Array.isArray(artists)) return '';
  return artists
    .map((a: any) => String(a?.name ?? ''))
    .filter((n) => n.length > 0)
    .join(', ');
}

function buildCookie(musicU: string): string {
  return `MUSIC_U=${musicU}; os=pc; appver=; osver=; deviceId=pyncm!`;
}

async function neteasePost(
  url: string,
  body: string,
  cookie?: string,
): Promise<any> {
  const t0 = Date.now();
  const headers: Record<string, string> = { ...NETEASE_HEADERS };
  if (cookie) headers['Cookie'] = cookie;
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });
  const elapsed = Date.now() - t0;
  console.log(`[neteasePost] ${url} -> ${res.status} (${elapsed}ms)`);
  if (!res.ok) {
    const text = await res.text();
    console.log(`[neteasePost] error body: ${text.slice(0, 200)}`);
    throw new Error(`NetEase API ${res.status}: ${text}`);
  }
  return await res.json();
}

async function neteaseGet(
  url: string,
  cookie?: string,
): Promise<any> {
  const t0 = Date.now();
  const headers: Record<string, string> = { ...NETEASE_HEADERS };
  if (cookie) headers['Cookie'] = cookie;
  const res = await fetch(url, {
    method: 'GET',
    headers,
  });
  const elapsed = Date.now() - t0;
  console.log(`[neteaseGet] ${url} -> ${res.status} (${elapsed}ms)`);
  if (!res.ok) {
    const text = await res.text();
    console.log(`[neteaseGet] error body: ${text.slice(0, 200)}`);
    throw new Error(`NetEase API ${res.status}: ${text}`);
  }
  return await res.json();
}

async function handleSearch(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const keyword = url.searchParams.get('keyword') ?? '';
  const limit = url.searchParams.get('limit') ?? '20';
  if (!keyword) return errorResponse('Missing keyword param', 400);

  const body = `s=${encodeURIComponent(keyword)}&type=1&offset=0&limit=${encodeURIComponent(limit)}`;
  const data = await neteasePost(
    'https://music.163.com/api/cloudsearch/pc',
    body,
  );

  const songs = data?.result?.songs;
  if (!Array.isArray(songs)) return json({ success: true, data: [] });

  const mapped = songs.map((item: any) => ({
    id: String(item.id ?? ''),
    name: String(item.name ?? ''),
    artist: joinArtists(item.ar ?? item.artists),
    album: String((item.al ?? item.album)?.name ?? ''),
    duration: (item.dt ?? item.duration) ? Math.floor((item.dt ?? item.duration) / 1000) : undefined,
    picId: (item.al ?? item.album)?.pic ? String((item.al ?? item.album).pic) : '',
  }));

  return json({ success: true, data: mapped });
}

async function handleResolve(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const params = request.headers.get('X-Netease-Params');
  const cookie = request.headers.get('X-Netease-Cookie');
  if (!id) return errorResponse('Missing id param', 400);
  if (!params) return errorResponse('Missing X-Netease-Params header', 400);
  if (!cookie)
    return errorResponse('Missing X-Netease-Cookie header', 400);

  const body = `params=${encodeURIComponent(params)}`;
  const cookieStr = buildCookie(cookie);
  const data = await neteasePost(
    'https://interface3.music.163.com/eapi/song/enhance/player/url/v1',
    body,
    cookieStr,
  );

  const arr = data?.data;
  const item = Array.isArray(arr) ? arr[0] : null;
  if (!item) return json({ success: true, data: { url: null } });

  const resultUrl =
    item.url && item.code === 200 ? String(item.url) : null;
  return json({ success: true, data: { url: resultUrl } });
}

async function handleDetail(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return errorResponse('Missing id param', 400);

  const cookieHeader = request.headers.get('X-Netease-Cookie');
  const cookie = cookieHeader ? buildCookie(cookieHeader) : undefined;

  const c = JSON.stringify([{ id: String(id), v: 0 }]);
  const body = `c=${encodeURIComponent(c)}`;
  const data = await neteasePost(
    'https://interface3.music.163.com/api/v3/song/detail',
    body,
    cookie,
  );

  const song = data?.songs?.[0];
  if (!song) return json({ success: true, data: null });

  const result = {
    name: String(song.name ?? ''),
    artist: joinArtists(song.ar ?? song.artists),
    cover: String((song.al ?? song.album)?.picUrl ?? ''),
  };
  return json({ success: true, data: result });
}

async function handleLyric(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return errorResponse('Missing id param', 400);

  const body = `id=${encodeURIComponent(id)}&os=pc&lv=-1&kv=-1&tv=-1`;
  const data = await neteasePost(
    'https://interface3.music.163.com/api/song/lyric',
    body,
  );

  const lyric = String(data?.lrc?.lyric ?? '');
  return json({ success: true, data: { lyric } });
}

async function handleAuth(request: Request): Promise<Response> {
  const cookieHeader = request.headers.get('X-Netease-Cookie');
  if (!cookieHeader) return errorResponse('Missing X-Netease-Cookie header', 400);

  const cookie = buildCookie(cookieHeader);
  const data = await neteasePost(
    'https://music.163.com/api/nuser/account/get',
    '',
    cookie,
  );

  const valid = !!(data?.account && data?.profile);
  return json({ success: true, data: { valid } });
}

async function handlePlaylists(request: Request): Promise<Response> {
  const cookieHeader = request.headers.get('X-Netease-Cookie');
  if (!cookieHeader) return errorResponse('Missing X-Netease-Cookie header', 400);

  const cookie = buildCookie(cookieHeader);

  // 1. Get current user id
  const accountData = await neteasePost(
    'https://music.163.com/api/nuser/account/get',
    '',
    cookie,
  );
  const userId = accountData?.profile?.userId;
  if (!userId) return errorResponse('Failed to get user id', 401);

  // 2. Get user playlists
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit') ?? '100';
  const offset = url.searchParams.get('offset') ?? '0';
  const listBody = `uid=${userId}&limit=${encodeURIComponent(limit)}&offset=${encodeURIComponent(offset)}`;
  const data = await neteaseGet(
    `https://music.163.com/api/user/playlist?${listBody}`,
    cookie,
  );

  const playlists = data?.playlist;
  if (!Array.isArray(playlists)) return json({ success: true, data: [] });

  const mapped = playlists.map((item: any) => ({
    id: String(item.id ?? ''),
    name: String(item.name ?? ''),
    trackCount: Number(item.trackCount ?? 0),
    cover: String(item.coverImgUrl ?? ''),
    specialType: Number(item.specialType ?? 0),
  }));

  return json({ success: true, data: mapped });
}

async function handlePlaylistDetail(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (!id) return errorResponse('Missing id param', 400);

  const cookieHeader = request.headers.get('X-Netease-Cookie');
  if (!cookieHeader) return errorResponse('Missing X-Netease-Cookie header', 400);
  const cookie = buildCookie(cookieHeader);

  // 1. Get trackIds
  const detailBody = `id=${encodeURIComponent(id)}&n=1000`;
  const detailData = await neteasePost(
    'https://music.163.com/api/v6/playlist/detail',
    detailBody,
    cookie,
  );

  const pl = detailData?.playlist;
  if (!pl) return errorResponse('Playlist not found', 404);

  const trackIds = Array.isArray(pl.trackIds) ? pl.trackIds.map((t: any) => t.id) : [];
  // Empty playlists are valid; only treat trackCount > 0 with no trackIds as an anomaly
  if (trackIds.length === 0 && Number(pl.trackCount ?? 0) > 0) {
    return errorResponse('Playlist tracks unavailable', 400);
  }

  // 2. Batch fetch song details (1000 per batch)
  const BATCH_SIZE = 1000;
  const batches: number[][] = [];
  for (let i = 0; i < trackIds.length; i += BATCH_SIZE) {
    batches.push(trackIds.slice(i, i + BATCH_SIZE));
  }

  const batchResults = await Promise.all(
    batches.map(async (ids) => {
      const c = JSON.stringify(ids.map((sid) => ({ id: String(sid), v: 0 })));
      const body = `c=${encodeURIComponent(c)}`;
      const data = await neteasePost(
        'https://interface3.music.163.com/api/v3/song/detail',
        body,
      );
      return Array.isArray(data?.songs) ? data.songs : [];
    }),
  );

  const allSongs = batchResults.flat();
  const songs = allSongs.map((item: any) => ({
    id: String(item.id ?? ''),
    name: String(item.name ?? ''),
    artist: joinArtists(item.ar ?? item.artists),
    duration: (item.dt ?? item.duration) ? Math.floor((item.dt ?? item.duration) / 1000) : undefined,
    picId: (item.al ?? item.album)?.pic ? String((item.al ?? item.album).pic) : '',
  }));

  return json({
    success: true,
    data: {
      name: String(pl.name ?? ''),
      cover: String(pl.coverImgUrl ?? ''),
      songs,
    },
  });
}

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;
  console.log(`[req] ${request.method} ${path} ${url.search}`);

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders() });
  }

  if (path === '/search' && request.method === 'GET') {
    return await handleSearch(request);
  }
  if (path === '/resolve' && request.method === 'GET') {
    return await handleResolve(request);
  }
  if (path === '/detail' && request.method === 'GET') {
    return await handleDetail(request);
  }
  if (path === '/lyric' && request.method === 'GET') {
    return await handleLyric(request);
  }
  if (path === '/auth' && request.method === 'GET') {
    return await handleAuth(request);
  }
  if (path === '/playlists' && request.method === 'GET') {
    return await handlePlaylists(request);
  }
  if (path === '/playlist' && request.method === 'GET') {
    return await handlePlaylistDetail(request);
  }

  return errorResponse('Not found', 404);
}

export default {
  async fetch(
    request: Request,
    _env: Env,
    _ctx: ExecutionContext,
  ): Promise<Response> {
    const t0 = Date.now();
    const path = new URL(request.url).pathname;
    try {
      const resp = await handleRequest(request);
      console.log(`[resp] ${path} -> ${resp.status} (${Date.now() - t0}ms)`);
      return resp;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Unknown error';
      console.log(`[error] ${path} -> ${message} (${Date.now() - t0}ms)`);
      return errorResponse(message, 502);
    }
  },
};
