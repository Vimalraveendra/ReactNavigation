import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const MaterialBottomTab = createMaterialBottomTabNavigator();
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

const BottomTab = () => {
  return (
    <MaterialBottomTab.Navigator>
      <MaterialBottomTab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="ios-home" size={25} />,
        }}
      />
      <MaterialBottomTab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <Icon name="ios-profile" size={25} />,
        }}
      />
      <MaterialBottomTab.Screen
        name="Tab3"
        component={Tab3}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: () => <Icon name="ios-notifications" size={25} />,
        }}
      />
    </MaterialBottomTab.Navigator>
  );
};

export default BottomTab;
