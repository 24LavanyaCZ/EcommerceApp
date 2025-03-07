import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext, useEffect } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import RoundedButton from '../Components/RoundedButton';
import IconBtns from '../Components/IconBtns';
import { UserContext } from '../Context/UserContext';

const SignIn = ({navigation}) => {
  const {userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
      if(userInfo){
        const cleanUserInfo = {
          uid: userInfo._user?.uid,
          displayName: userInfo._user?.displayName,
          email: userInfo._user?.email,
          photoURL: userInfo._user?.photoURL,
        };
        console.log("C",cleanUserInfo)
        navigation.navigate('home')
      }else{
        console.log("Sign in first")
      }
    }, [userInfo]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/sign-up.jpg')}
        style={styles.img}
      />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={[
            styles.text,
            {fontSize: responsiveFontSize(4), fontWeight: 'bold'},
          ]}>
          Hello
        </Text>
        <Text
          style={[
            styles.text,
            {fontSize: responsiveFontSize(2), color: '#555'},
          ]}>
          Welcome to Ecommerce
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: responsiveHeight(2),
        }}>
        <RoundedButton text={'Login'} onPress={() => navigation.navigate('login')}/>
        <RoundedButton text={'Sign Up'} border={true} onPress={() => navigation.navigate('signup')}/>
      </View>

      <View style={styles.social}>
        <IconBtns />
      </View>
     
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: responsiveWidth(100),
    height: responsiveHeight(50),
  },
  text: {},
  social: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
});
