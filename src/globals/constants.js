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

export const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute';

export const MOCKS = {
  UNKNOWN: [
    {
        "id": 1,
        "name": "cerulean",
        "year": 2000,
        "color": "#98B2D1",
        "pantone_value": "15-4020"
    },
    {
        "id": 2,
        "name": "fuchsia rose",
        "year": 2001,
        "color": "#C74375",
        "pantone_value": "17-2031"
    },
    {
        "id": 3,
        "name": "true red",
        "year": 2002,
        "color": "#BF1932",
        "pantone_value": "19-1664"
    },
    {
        "id": 4,
        "name": "aqua sky",
        "year": 2003,
        "color": "#7BC4C4",
        "pantone_value": "14-4811"
    },
    {
        "id": 5,
        "name": "tigerlily",
        "year": 2004,
        "color": "#E2583E",
        "pantone_value": "17-1456"
    },
    {
        "id": 6,
        "name": "blue turquoise",
        "year": 2005,
        "color": "#53B0AE",
        "pantone_value": "15-5217"
    }
  ]
};
