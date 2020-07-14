import React from 'react';
import RegisterComponent from '../../components/auth/RegisterComponent';
const Register = (props) => {
  return <RegisterComponent navigation={props.navigation} screenName="Login" />;
};

export default Register;
