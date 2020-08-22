import React from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const MaterialTopTab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen
        name="Tab1"
        component={Tab1}
        options={{tabBarLabel: 'Hello'}}
      />
      <MaterialTopTab.Screen name="Tab2" component={Tab2} />
      <MaterialTopTab.Screen name="Tab3" component={Tab3} />
    </MaterialTopTab.Navigator>
  );
};

export default TopTab;
