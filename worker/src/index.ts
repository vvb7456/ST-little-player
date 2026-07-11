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
