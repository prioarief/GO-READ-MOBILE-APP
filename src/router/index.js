import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {
  GetStarted,
  LoginComponent,
  RegisterComponent,
  Splash,
  Home,
  History,
  Dashboard,
  DetailBook,
  UserProfile,
  Manage,
} from '../screens';
import {BottomNavigator, FormData} from '../components';
import {connect} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const router = (props) => {
  const MainApp = () => {
    return (
      <Tab.Navigator
        tabBar={(data) => <BottomNavigator {...data} key={data} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={History} />
        {props.auth.data.role === 'Admin' && (
          <Tab.Screen name="Dashboard" component={Dashboard} />
        )}
        {props.auth.data.role === 'User' && (
          <Tab.Screen name="Profile" component={UserProfile} />
        )}
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Welcome"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Manage Data"
        component={Manage}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="FormData"
        component={FormData}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailBook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(router);
