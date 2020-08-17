import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import MyDrawer from './Drawer/Drawer';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const App = () => {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'purple',
      background: 'rgb(242, 242, 242)',
      card: 'black',
      text: '#fff',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
        <MyDrawer />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
