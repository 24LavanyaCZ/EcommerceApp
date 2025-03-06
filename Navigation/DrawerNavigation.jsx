import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import Wishlist from '../Screens/Wishlist';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentContainerStyle: {marginVertical: responsiveHeight(4)},
      }}
      detachPreviousScreen={false}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{headerTitle: 'SwiftCart', headerShown: false}}
      />

      <Drawer.Screen
        name="Search"
        component={Search}
        options={{headerTitle: 'SwiftCart', headerShown: false}}
      />

      <Drawer.Screen
        name="WishList"
        component={Wishlist}
        options={{headerTitle: 'SwiftCart', headerShown: false}}
      />

      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{headerTitle: 'SwiftCart', headerShown: false}}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerTitle: 'SwiftCart', headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
