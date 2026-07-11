import { AES, MD5, Utf8, Base64, ECB, Pkcs7 } from 'crypto-es';
import { logger } from '@/utils/logger';

export const NETEASE_API_BASE = 'https://music.163.com';
export const NETEASE_INTERFACE_BASE = 'https://interface3.music.163.com';
export const EAPI_AES_KEY = 'e82ckenh8dichen8';

const EAPI_AES_KEY_WORDS = Utf8.parse(EAPI_AES_KEY);
const PIC_ID_MAGIC = '3go8&$8*3*3h0k(2)2';

export function eapiEncrypt(urlPath: string, payload: Record<string, unknown>): string {
  const payloadJson = JSON.stringify(payload);
  const digest = MD5('nobody' + urlPath + 'use' + payloadJson + 'md5forencrypt').toString();
  const paramsStr = `${urlPath}-36cd479b6b5-${payloadJson}-36cd479b6b5-${digest}`;
  const encrypted = AES.encrypt(paramsStr, EAPI_AES_KEY_WORDS, {
    mode: ECB,
    padding: Pkcs7,
  });
  const ciphertext = encrypted.ciphertext;
  if (!ciphertext) {
    logger.error('eapiEncrypt produced empty ciphertext', { urlPath });
    return '';
  }
  return ciphertext.toString().toUpperCase();
}

export function encryptPicId(picId: string): string {
  const xored = picId
    .split('')
    .map((ch, i) => String.fromCharCode(ch.charCodeAt(0) ^ PIC_ID_MAGIC.charCodeAt(i % PIC_ID_MAGIC.length)))
    .join('');
  const md5Bytes = MD5(xored);
  const b64 = Base64.stringify(md5Bytes);
  return b64.replace(/\//g, '_').replace(/\+/g, '-');
}

export function buildCoverUrl(picId: string): string {
  if (!picId) {
    logger.warn('buildCoverUrl called with empty picId');
    return '';
  }
  return `https://p3.music.126.net/${encryptPicId(picId)}/${picId}.jpg?param=300y300`;
}
