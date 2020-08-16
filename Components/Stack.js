import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NotificationScreen from './Notifications';
import ProfileScreen from './Profile';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
