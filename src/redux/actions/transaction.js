import axios from 'axios';
import {API} from '@env';

export const Borrow = (token, id) => {
  return {
    type: 'BORROW',
    payload: axios({
      method: 'GET',
      url: `${API}/transaction/borrow/${id}`,
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
      url: `${API}/transaction/return/${id}`,
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
      url: `${API}/transaction/history`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
