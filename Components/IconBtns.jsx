import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { signInWithGoogle } from '../config/firebase/GoogleSignIn';
import { UserContext } from '../Context/UserContext';

const IconBtns = () => {
  const facebook = '../assets/images/facebook.png';
  const google = '../assets/images/google.png';
   const {setUserInfo} = useContext(UserContext)
  
  return (
    <View style={styles.container}>
      <Text>or via social media</Text>
      <View style={styles.social}>
   
        <TouchableOpacity>
          <Image source={require(facebook)} style={styles.img} />
        </TouchableOpacity>
        <TouchableOpacity onPress={async ()=>{
            const userIn = await signInWithGoogle()
            if (userIn) {
              setUserInfo(prevState => {
                console.log("Previous State:", prevState); // Logs previous state before update
                console.log("New State:", userIn); // Logs new user data
                return userIn; // Updates state with new user info
              });
            }
          }}>
          <Image source={require(google)} style={styles.img} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IconBtns;

const styles = StyleSheet.create({
  container: {
    gap: responsiveWidth(5),
    marginTop: responsiveHeight(1),
  },
  img: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
  },
  social: {
    flexDirection: 'row',
    gap: responsiveWidth(5),
    justifyContent: 'center',
  },
});
