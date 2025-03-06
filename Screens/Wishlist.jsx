import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../Common/Header';
import {useNavigation} from '@react-navigation/native';

const Wishlist = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../assets/images/menu.png')}
        rightIcon={require('../assets/images/bag.png')}
        onClickLeftIcon={() => navigation.openDrawer()}
      />
      <Text>Wishlist</Text>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
