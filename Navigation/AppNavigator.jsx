import {StyleSheet, Text, View} from 'react-native';
import Splash from '../Screens/Splash';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import DrawerNavigation from './DrawerNavigation';
import Search from '../Screens/Search';
import Wishlist from '../Screens/Wishlist';
import Notification from '../Screens/Notification';
import Profile from '../Screens/Profile';
import MenCloths from '../Screens/CategoryPage';
import Detail from '../Screens/Detail';
import CategoryPage from '../Screens/CategoryPage';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right', 
        headerShown: false,
        gestureEnabled: true, // Allows swiping back smoothly
      }}>
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="home" component={DrawerNavigation} />
      <Stack.Screen name="category" component={CategoryPage} />
      <Stack.Screen name="detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
