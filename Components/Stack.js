import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NotificationScreen from './Notifications';
import ProfileScreen from './Profile';
import DetailsScreen from './Details';
import BottomTab from '../Tabs/BottomTab';
import TopTab from '../Tabs/TopTab';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="BottomTab" children={BottomTab} />
      <Stack.Screen name="TopTab" children={TopTab} />
    </Stack.Navigator>
  );
};

export default MyStack;
