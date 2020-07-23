import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {showMessage} from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {Register} from '../../redux/actions/auth';
import Loading from '../molecules/Loading';

const RegisterComponent = ({navigation, screenName, dispatch}) => {
  const [user, setUser] = useState({email: '', password: '', name: ''});
  const [ShowLoading, setLoading] = useState(false);
  const handleRegister = () => {
    setLoading(true);
    const data = {
      email: user.email,
      password: user.password,
      name: user.name,
    };
    // console.log(data);
    dispatch(Register(data))
      .then((res) => {
        setLoading(false);
        showMessage({
          message: res.value.data.data.message,
          type: 'success',
          backgroundColor: 'green',
          color: 'white',
        });
        navigation.replace('Login');
      })
      .catch((err) => {
        setLoading(false);
        showMessage({
          message: err.response.data.data,
          type: 'error',
          backgroundColor: 'red',
          color: 'white',
        });
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Text title="" style={styles.title}>
          Welcome, Please Register
        </Text>
        <Input
          placeholder="Your Name"
          value={user.name}
          onChangeText={(input) => setUser({...user, name: input})}
          leftIcon={<Icon name="user" size={24} color="black" />}
        />
        <Input
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
          icon={<Icon name="user-plus" size={16} color="white" />}
          title=" Register"
          onPress={handleRegister}
        />
        <Text title="" style={styles.not}>
          Already Account?
        </Text>
        <Text
          style={styles.button_register}
          onPress={() => navigation.navigate(screenName)}>
          Login
        </Text>
      </View>
      {ShowLoading && <Loading />}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white',
  },
  button: {
    // flex: 9,
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
    // backgroundColor: 'rgb(17, 73, 196)',
    backgroundColor: '#eaeaea',
    // paddingTop: 50,
    justifyContent: 'center',
    // marginTop: 150,
    padding: 70,
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
export default connect(mapStateToProps)(RegisterComponent);
