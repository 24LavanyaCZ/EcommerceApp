import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import Wishlist from '../Screens/Wishlist'
import Notification from '../Screens/Notification'
import Profile from '../Screens/Profile'
// import Ion from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({leftIcon, rightIcon, onClickLeftIcon, onClickRightIcon}) => {
    const [selectedPage, setSelectedPage] = useState(0)
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.btn}>
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

        {selectedPage === 0 ? (
         <Text>Home</Text>
        ) : selectedPage === 1 ? (
          <Search />
        ) : selectedPage === 2 ? (
          <Wishlist />
        ) : selectedPage === 3 ? (
          <Notification />
        ) : selectedPage === 4 ? (
          <Profile />
        ) : null}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.btn} onPress={() => setSelectedPage(0)}>
          <Image
            source={require('../assets/images/home.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setSelectedPage(1)}>
          <Image
            source={require('../assets/images/search.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setSelectedPage(2)}>
          <Image
            source={require('../assets/images/like.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setSelectedPage(3)}>
          <Image
            source={require('../assets/images/notification.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setSelectedPage(4)}>
          <Image
            source={require('../assets/images/user.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header: {
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(2),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  btn: {
    padding: responsiveHeight(1),
  },
  txt: {
    fontSize: responsiveFontSize(3),
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
