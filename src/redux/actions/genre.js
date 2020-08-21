import axios from 'axios';
import {APP_API_URL} from '@env';
export const getGenre = (token) => {
  return {
    type: 'GENRE',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/genres`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const insertGenre = (token, data) => {
  return {
    type: 'INSERT',
    payload: axios({
      method: 'POST',
      url: `${APP_API_URL}/api/genres`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const deleteGenre = (token, id) => {
  return {
    type: 'DELETE',
    payload: axios({
      method: 'DELETE',
      url: `${APP_API_URL}/api/genres/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const getDetailGenre = (token, id) => {
  return {
    type: 'DETAIL',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/genres/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const EditGenre = (token, id, data) => {
  return {
    type: 'EDIT',
    payload: axios({
      method: 'PUT',
      url: `${APP_API_URL}/api/genres/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};
