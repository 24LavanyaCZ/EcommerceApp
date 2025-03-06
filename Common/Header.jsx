import {View, Text, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import ff from '../Services/fontFamily'



const Header = ({leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon}) => {
   
  return (
    <SafeAreaView>
      <View style={styles.header}>
      <TouchableOpacity style={styles.btn} onPress={()=>onClickLeftIcon()}>
        <Image
          source={leftIcon}
          style={{width: responsiveWidth(5), height: responsiveHeight(3)}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.txt}>SwiftCart</Text>

      <TouchableOpacity style={styles.btn}>
        <Image
          source={rightIcon}
          style={{width: responsiveWidth(7), height: responsiveHeight(3)}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    padding: responsiveHeight(1),
  },
  txt: {
    fontSize: responsiveFontSize(3),
    fontFamily: ff.mSb
  },
  bottomTab: {

    position:'absolute',
    bottom:0,
    backgroundColor: 'beige',
    width: responsiveWidth(100),
    height: responsiveHeight(5),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: responsiveWidth(5),
    height: responsiveHeight(3),
  },
});
