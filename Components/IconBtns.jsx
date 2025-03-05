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
   const {userInfo, setUserInfo} = useContext(UserContext)
  

   useEffect(()=>{
    console.log("User State:", userInfo); 
   },[userInfo])
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
              setUserInfo(userIn);
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
    marginVertical: responsiveHeight(3),
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
