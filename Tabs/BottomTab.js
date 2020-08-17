import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const MaterialBottomTab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <MaterialBottomTab.Navigator>
      <MaterialBottomTab.Screen
        name="Tab1"
        children={Tab1}
        options={{
          title: 'Home',
        }}
      />
      <MaterialBottomTab.Screen name="Tab2" component={Tab2} />
      <MaterialBottomTab.Screen name="Tab3" component={Tab3} />
    </MaterialBottomTab.Navigator>
  );
};

export default BottomTab;
