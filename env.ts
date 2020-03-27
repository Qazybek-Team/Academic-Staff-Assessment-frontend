export const BASE_URL = process.server
  ? process.env.BASE_URL_SERVER
  : process.env.BASE_URL_BROWSER;

export const API_URL = BASE_URL + '/api/v1';
