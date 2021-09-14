import axios from 'axios';

import { API_URL, ADMIN_API_URL } from '../constants';

export const userAxiosInstance = axios.create({
  baseURL: API_URL,
});
export const adminAxiosInstance = axios.create({
  baseURL: ADMIN_API_URL,
  // authorization headers
});
