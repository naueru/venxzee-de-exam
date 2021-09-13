export const BASE_API_URL = 'https://reqres.in/api/';

export const API_URLS = {
  USERS: BASE_API_URL + 'users',
  POSTS: BASE_API_URL + 'posts',
  REGISTER: BASE_API_URL + 'register',
  LOGIN: BASE_API_URL + 'login'
};

export const METHODS = {
  GET: 'GET',
  POST: 'POST'
};

export const MESSAGES = {
  INVALID_EMAIL: 'Please use a valid email',
  PASSWORD_MISSMATCH: 'Password and repeat password should match',
  MISSING_PASSWORD: 'Please type the password'
};
