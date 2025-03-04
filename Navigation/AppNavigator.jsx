import { StyleSheet, Text, View } from 'react-native'
import Splash from '../Screens/Splash';
import Home from '../Screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="signup" component={SignUp} />
    <Stack.Screen name="login" component={Login} />
    <Stack.Screen name="splash" component={Splash} />
    <Stack.Screen name="home" component={Home} />
  </Stack.Navigator>
  )
}

export default AppNavigator

