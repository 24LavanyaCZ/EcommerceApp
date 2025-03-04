import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useContext, useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import RoundedButton from '../Components/RoundedButton';
import IconBtns from '../Components/IconBtns';
import { loginUser } from '../config/firebase/GoogleSignIn';
import { UserContext } from '../Context/UserContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {userInfo,setUserInfo} = useContext(UserContext)
   useEffect(()=>{
      console.log("first",userInfo)
     },[userInfo])
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {fontSize: responsiveFontSize(4), fontWeight: 'bold'},
        ]}>
        Welcome Back
      </Text>
      <Text style={{fontSize: responsiveFontSize(2), color: '#555'}}>
        Sign in to continue
      </Text>

      <View style={styles.fieldBox}>
        <View style={{gap: responsiveHeight(1)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: '#555'}}>
            Username
          </Text>
          <TextInput
            placeholder="Enter email"
            style={styles.field}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={{gap: responsiveHeight(1)}}>
          <Text style={{fontSize: responsiveFontSize(2), color: '#555'}}>
            Password
          </Text>
          <TextInput
            placeholder="Enter password"
            style={styles.field}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
        </View>

        <RoundedButton
          text="Login"
          width={90}
          onPress={() => loginUser(email,password)}
        />

        <Text
          style={{
            fontSize: responsiveFontSize(1.7),
            color: '#555',
            marginTop: responsiveHeight(2),
          }}>
          Forgot Password?
        </Text>
      </View>

      <View style={styles.social}>
        <IconBtns/>
        <TouchableOpacity
          onPress={() => navigation.navigate('signup')}
          style={{fontSize: responsiveFontSize(1)}}>
          <Text style={{color: '#64a5ff', marginTop: responsiveHeight(1)}}>
            Don't have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: responsiveWidth(5),
  },
  field: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2),
  },
  fieldBox: {
    marginVertical: responsiveHeight(5),
    gap: responsiveHeight(2),
    alignItems: 'center',
  },
  social: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
});
