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
} from '../screens';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  const [Admin] = useState(true);
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigator {...props} key={props} />}>
      <Tab.Screen name="User" component={Home} />
      <Tab.Screen name="Admin" component={Home} />
      <Tab.Screen name="History" component={History} />
      {Admin && <Tab.Screen name="Dashboard" component={Dashboard} />}
    </Tab.Navigator>
  );
};

const router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Welcome"
        component={Splash}
        options={{headerShown: false}}
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
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default router;
