import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MyStack from '../Components/Stack';
import Contact from './Contact';
import Profile from './ProfileDrawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={MyStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
