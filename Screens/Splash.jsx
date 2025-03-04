import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Splash = ({navigation}) => {
  // setTimeout(() => {
  //   navigation.replace('home')
  // },2000)
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash-logo.gif')}
        style={{width: responsiveWidth(16), height: responsiveHeight(7)}}
        resizeMode='contain'
      />
      <Text style={{fontSize:responsiveFontSize(3), fontWeight:500}}>Shopify</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
