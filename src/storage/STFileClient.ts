/**
 * Client for SillyTavern's native file upload API.
 *
 * Uses POST /api/files/upload (JSON with base64 data) to store files on the
 * ST server under data/{user}/user/files/. Files are served statically at
 * GET /user/files/{filename}.
 *
 * CSRF token is automatically included via getRequestHeaders().
 */

interface FileUploadResponse {
  path: string;
}

import { logger } from '@/utils/logger';

function getHeaders(): Record<string, string> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (typeof SillyTavern !== 'undefined' && SillyTavern.getContext) {
    const ctx = SillyTavern.getContext();
    if (ctx?.getRequestHeaders) {
      const stHeaders = ctx.getRequestHeaders();
      if (stHeaders && typeof stHeaders === 'object') {
        Object.assign(headers, stHeaders);
      }
    }
  }
  return headers;
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (): void => {
      const result = reader.result as string;
      const commaIdx = result.indexOf(',');
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.onerror = (): void => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function sanitizeFileName(name: string): string {
  // ST only allows [a-zA-Z0-9_\-.]
  const ext = name.lastIndexOf('.');
  const base = ext > 0 ? name.slice(0, ext) : name;
  const suffix = ext > 0 ? name.slice(ext) : '';
  const cleaned = base.replace(/[^a-zA-Z0-9_\-.]/g, '_');
  return `${cleaned}${suffix}`;
}

export async function uploadFile(file: File): Promise<string> {
  const base64 = await fileToBase64(file);
  const safeName = sanitizeFileName(file.name);
  const response = await fetch('/api/files/upload', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ name: safeName, data: base64 }),
  });
  if (!response.ok) {
    throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
  }
  const data = (await response.json()) as FileUploadResponse;
  return data.path;
}

export async function deleteFile(path: string): Promise<void> {
  const response = await fetch('/api/files/delete', {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ path }),
  });
  if (!response.ok) {
    logger.warn('deleteFile failed: ' + response.status);
  }
}


