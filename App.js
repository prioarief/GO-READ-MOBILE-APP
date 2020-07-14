import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginComponent from './src/screens/auth/Login';
import RegisterComponent from './src/screens/auth/Register';

const Stack = createStackNavigator();
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="Register" component={RegisterComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
