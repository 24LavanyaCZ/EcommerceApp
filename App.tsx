import './gesture-handler';
import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import AppNavigator from './Navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import { UserProvider } from './Context/UserContext';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <UserProvider>
          <AppNavigator />
          </UserProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

