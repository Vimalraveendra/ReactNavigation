import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NotificationScreen from './Notifications';
import ProfileScreen from './Profile';
import DetailsScreen from './Details';
import BottomTab from '../Tabs/BottomTab';
import TopTab from '../Tabs/TopTab';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTintColor: 'red',
          handleLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" />
          ),
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerStyle: {backgroundColor: 'blue'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'DetailsScreen',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen name="BottomTab" children={BottomTab} />
      <Stack.Screen name="TopTab" children={TopTab} />
    </Stack.Navigator>
  );
};

export default MyStack;
