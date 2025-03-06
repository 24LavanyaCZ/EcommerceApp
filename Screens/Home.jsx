import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import Header from '../Common/Header';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import ff from '../Services/fontFamily';

const Home = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../assets/images/menu.png')}
        rightIcon={require('../assets/images/bag.png')}
        onClickLeftIcon={() => navigation.openDrawer()}
      />
      <View style={styles.content}>
        <Text style={styles.head}>Ensure Your Fashion With Us</Text>
        <View style={styles.category}>
          <View style={styles.icons}>
           
          
            <TouchableOpacity onPress={()=>navigation.navigate('category',{category:"men's clothing"})}>
              <Image source={require('../assets/Animations/shirt.png')} style={styles.iconStyle} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('category',{category:"electronics"})}>
              <Image source={require('../assets/Animations/lap.png')} style={styles.iconStyle} resizeMode='contain' />
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>navigation.navigate('category',{category:"jewelery"})}>
              <Image source={require('../assets/Animations/necklace.png')} style={styles.iconStyle} resizeMode='contain' />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('category',{category:"women's clothing"})}>
              <Image source={require('../assets/Animations/woman.png')} style={styles.iconStyle} resizeMode='contain' />
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: "#fff",
  },
  head: {
    fontFamily: ff.mB,
    fontSize: responsiveFontSize(2.5),
    width: responsiveWidth(50),
    paddingVertical: responsiveHeight(1),
  },
  category: {
    borderWidth: 0.5,
    borderColor: "rgb(231, 225, 225)",
    borderRadius: responsiveWidth(4),
    backgroundColor: "#fff",
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(2),

    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    elevation: 5,
  },
  icons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly', // Ensures even spacing in wrap mode
    alignItems: "center",
  },
  iconStyle: {
    width: responsiveWidth(40), // Use responsive width instead of '48%' to ensure consistency
    height: responsiveHeight(12),
    marginVertical: responsiveHeight(1),
  },
});
