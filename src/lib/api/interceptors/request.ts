import type { InternalAxiosRequestConfig } from "axios";

export const addAuthorizationHeader = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token == null) return;

  // 認証ヘッダーにトークンを追加
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}