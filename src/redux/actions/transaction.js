import axios from 'axios';
import {APP_API_URL} from '@env';

export const Borrow = (token, id) => {
  return {
    type: 'BORROW',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/transaction/borrow/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const Return = (token, id) => {
  return {
    type: 'RETURN',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/transaction/return/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const getHistory = (token) => {
  return {
    type: 'HISTORY',
    payload: axios({
      method: 'POST',
      url: `${APP_API_URL}/api/transaction/history`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
