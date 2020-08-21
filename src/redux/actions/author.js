import axios from 'axios';
import {APP_API_URL} from '@env';

export const getAuthor = (token) => {
  return {
    type: 'AUTHOR',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/authors`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const getDetailAuthor = (token, id) => {
  return {
    type: 'DETAIL',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/authors/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const insertAuthor = (token, data) => {
  return {
    type: 'INSERT',
    payload: axios({
      method: 'POST',
      url: `${APP_API_URL}/api/authors`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const deleteAuthor = (token, id) => {
  return {
    type: 'DELETE',
    payload: axios({
      method: 'DELETE',
      url: `${APP_API_URL}/api/authors/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const editAuthor = (token, id, data) => {
  return {
    type: 'EDIT',
    payload: axios({
      method: 'PUT',
      url: `${APP_API_URL}/api/authors/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};
