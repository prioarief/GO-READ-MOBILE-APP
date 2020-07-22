import axios from 'axios';
import {API} from '@env';

export const getAuthor = (token) => {
  return {
    type: 'AUTHOR',
    payload: axios({
      method: 'GET',
      url: `${API}/authors`,
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
      url: `${API}/authors/${id}`,
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
      url: `${API}/authors`,
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
      url: `${API}/authors/${id}`,
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
      url: `${API}/authors/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};
