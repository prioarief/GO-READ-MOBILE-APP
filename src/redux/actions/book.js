import axios from 'axios';
import {APP_API_URL} from '@env';

export const getBook = (token, search, sort, page, by) => {
  return {
    type: 'BOOK',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/books`,
      params: {
        search: search,
        // show: show || 6,
        page: page || 1,
        sort: sort || 'latest',
        by: by,
      },
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const insertBook = (token, data) => {
  // console.log(token)
  return {
    type: 'INSERT',
    payload: axios({
      method: 'POST',
      url: `${APP_API_URL}/api/books`,
      data: data,
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    }),
  };
};

export const detailBook = (token, id) => {
  // console.log(token)
  return {
    type: 'DETAIL',
    payload: axios({
      method: 'GET',
      url: `${APP_API_URL}/api/books/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const deleteBook = (token, id) => {
  // console.log(token)
  return {
    type: 'DELETE',
    payload: axios({
      method: 'DELETE',
      url: `${APP_API_URL}/api/books/${id}`,
      headers: {
        Authorization: token,
      },
    }),
  };
};
export const editBook = (token, id, data) => {
  console.log(data);
  return {
    type: 'EDIT',
    payload: axios({
      method: 'PUT',
      url: `${APP_API_URL}/api/books/${id}`,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};
