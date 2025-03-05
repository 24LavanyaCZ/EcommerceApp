import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import  Header  from '../Common/Header'
import BottomTab from '../Common/BottomTab'

const Home = () => {
  const {userInfo, setUserInfo} = useContext(UserContext)
  return (
    <View style={styles.container}>
    <Header leftIcon={require('../assets/images/menu.png')} rightIcon={require('../assets/images/bag.png')}/>
    
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
      },
})