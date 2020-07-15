import React from 'react';
import {LoginComponent} from '../../components';
const Login = (props) => {
  return <LoginComponent navigation={props.navigation} screenName="Register" />;
};

export default Login;
