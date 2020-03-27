export const BASE_URL = process.server
  ? 'http://backend:1202'
  : 'http://localhost';

export const API_URL = BASE_URL + '/api/v1';
