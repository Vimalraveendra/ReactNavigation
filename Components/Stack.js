import React from 'react';
import Home from './HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NotificationScreen from './Notifications';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
