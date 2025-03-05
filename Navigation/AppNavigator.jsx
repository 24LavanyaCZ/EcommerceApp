import { StyleSheet, Text, View } from 'react-native'
import Splash from '../Screens/Splash';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import DrawerNavigation from './DrawerNavigation';
import Search from '../Screens/Search';
import Wishlist from '../Screens/Wishlist';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="signup" component={SignUp} />
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="splash" component={Splash} />
    <Stack.Screen name="home" component={DrawerNavigation} />
    {/* <Stack.Screen name="search" component={Search} />
    <Stack.Screen name="wishlist" component={Wishlist} />
    <Stack.Screen name="notification" component={Notification} />
    <Stack.Screen name="profile" component={Profile} /> */}
  </Stack.Navigator>
  )
}

export default AppNavigator

