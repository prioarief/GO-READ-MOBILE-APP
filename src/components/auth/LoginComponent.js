import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {Login} from '../../redux/actions/auth';
import Loading from '../molecules/Loading';

const LoginComponent = ({navigation, screenName, dispatch}) => {
  const [user, setUser] = useState({email: '', password: ''});
  const [ShowLoading, setLoading] = useState(false);
  const handleLogin = () => {
    // console.log(dispatch());
    setLoading(true);
    const data = {
      email: user.email,
      password: user.password,
    };
    // console.log(data);
    dispatch(Login(data))
      .then((res) => {
        setLoading(false);
        console.log(res.value.status);
        navigation.replace('MainApp');
      })
      .catch((err) => {
        setLoading(false);
        showMessage({
          message: err.response.data.data,
          type: 'error',
          backgroundColor: 'red',
          color: 'white',
        });

        console.log(err.response.data.data);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Text title="" style={styles.title}>
          Welcome Back
        </Text>
        <Input
          importantForAutofill="yes"
          keyboardType="email-address"
          value={user.email}
          placeholder="Email Address"
          onChangeText={(input) => setUser({...user, email: input})}
          leftIcon={<Icon name="envelope" size={24} color="black" />}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(input) => setUser({...user, password: input})}
          leftIcon={<Icon name="lock" size={32} color="black" />}
        />

        <Button
          titleStyle={styles.button}
          buttonStyle={styles.button}
          icon={<Icon name="sign-in" size={24} color="white" />}
          title=" Login"
          onPress={handleLogin}
        />
        <Text title="" style={styles.not}>
          Not registered?
        </Text>
        <Text
          style={styles.button_register}
          onPress={() => navigation.navigate(screenName)}>
          Register
        </Text>
      </View>
      {ShowLoading && <Loading />}
    </>
  );
};
// export default connect(mapStateToProps)(LoginComponent);

const styles = StyleSheet.create({
  input: {
    color: 'white',
  },
  button: {
    borderColor: 'black',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 17,
  },
  button_register: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    padding: 50,
  },
  not: {
    fontSize: 12,
    margin: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps)(LoginComponent);
