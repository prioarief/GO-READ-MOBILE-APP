import React, {useState} from 'react';
import {Button, Input} from 'react-native-elements';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const RegisterComponent = ({navigation, screenName}) => {
  const [user, setUser] = useState({email: '', password: '', name: ''});
  const [Loading, setLoading] = useState(false);
  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      axios({
        method: 'POST',
        url: 'http://192.168.43.81:3000/api/auth/register',
        data: {
          email: user.email,
          password: user.password,
          name: user.name,
          role: 2,
        },
      })
        .then((res) => {
          console.log(res.data.data);
          navigation.navigate(screenName);
        })
        .catch((err) => {
          console.log(err.response.data.data);
        });
      setLoading(false);
    }, 2000);
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
        {Loading && <ActivityIndicator size="large" color="navy" />}
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
        <Button
          titleStyle={styles.button_register}
          buttonStyle={styles.button_register}
          title="Login"
          onPress={() => navigation.navigate(screenName)}
        />
      </View>
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
    borderColor: 'black',
    backgroundColor: '#eaeaea',
    borderRadius: 17,
    color: 'black',
  },
  container: {
    flex: 1,
    // backgroundColor: 'rgb(17, 73, 196)',
    backgroundColor: '#eaeaea',
    paddingTop: 50,
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

export default RegisterComponent;
