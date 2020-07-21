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
} from '../screens';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  const [Admin] = useState(true);
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigator {...props} key={props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={History} />
      <Tab.Screen name="Profile" component={UserProfile} />
      {/* {Admin && <Tab.Screen name="Dashboard" component={Dashboard} />} */}
    </Tab.Navigator>
  );
};

const router = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
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

export default router;
