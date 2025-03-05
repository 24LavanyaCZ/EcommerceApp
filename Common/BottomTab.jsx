import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import Wishlist from '../Screens/Wishlist'
import Notification from '../Screens/Notification'
import Profile from '../Screens/Profile'


const BottomTab = () => {
  const [selectedPage, setSelectedPage] = useState(0)
  const navigation = useNavigation()
  
 
  return (
      <View style={styles.bottomTab}>
      {
         selectedPage === 0
         ? (<Home/>)
         : selectedPage === 1
         ? (<Search/>)
         : selectedPage === 2
         ? (<Wishlist/>)
         : selectedPage === 3
         ? (<Notification/>)
         : selectedPage === 4
         ? (<Profile/>)
         : null
      }
        <TouchableOpacity style={styles.btn} onPress={()=>setSelectedPage(0)}>
             <Image
               source={require('../assets/images/home.png')}
               style={styles.icon}
               resizeMode="contain"
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>setSelectedPage(1)}>
             <Image
               source={require('../assets/images/search.png')}
               style={styles.icon}
               resizeMode="contain"
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>setSelectedPage(2)}>
             <Image
               source={require('../assets/images/like.png')}
               style={styles.icon}
               resizeMode="contain"
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>setSelectedPage(3)}>
             <Image
               source={require('../assets/images/notification.png')}
               style={styles.icon}
               resizeMode="contain"
             />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={()=>setSelectedPage(4)}>
             <Image
               source={require('../assets/images/user.png')}
               style={styles.icon}
               resizeMode="contain"
             />
        </TouchableOpacity>
        
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
    bottomTab:{
        position:'absolute',
        bottom:0,
        backgroundColor:"beige",
        width: responsiveWidth(100),
        height: responsiveHeight(5),
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection: 'row'
    },
    icon:{
        width: responsiveWidth(5),
        height: responsiveHeight(3)
    },
    btn: {
        padding: responsiveHeight(1)
      },
})