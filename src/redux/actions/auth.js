import axios from 'axios';

export const Login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.43.81:3000/api/auth/login',
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};

export const Register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/register',
      data: {
        email: data.email,
        password: data.password,
        name: data.name,
        role: 2,
      },
    }),
  };
};

export const Activation = (data) => {
  return {
    type: 'ACTIVATION',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/activation',
      data: {
        email: data.email,
        code: data.code,
      },
    }),
  };
};

export const Logout = () => {
  return {
    type: 'LOGOUT',
  };
};
