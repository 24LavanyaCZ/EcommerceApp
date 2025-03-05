import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="homescreen"
        component={Home}
        options={{headerTitle: 'SwiftCart', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
