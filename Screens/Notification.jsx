import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Common/Header';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  return (
  <View style={styles.container}>
    <Header
        leftIcon={require('../assets/images/menu.png')}
        rightIcon={require('../assets/images/bag.png')}
        onClickLeftIcon={() => navigation.openDrawer()}
      />
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
    
})