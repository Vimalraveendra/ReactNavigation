import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MyStack from '../Components/Stack';
import Contact from './Contact';
import Favorites from './Favorites';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" children={MyStack} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Favorites" component={Favorites} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
