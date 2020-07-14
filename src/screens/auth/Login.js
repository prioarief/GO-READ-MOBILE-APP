import React from 'react';
import LoginComponent from '../../components/auth/LoginComponent';
const Login = (props) => {
  return <LoginComponent navigation={props.navigation} screenName="Register" />;
};

export default Login;
