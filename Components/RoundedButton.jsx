import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const RoundedButton = ({text,border=false,width=20, onPress}) => {
  return (
    <TouchableOpacity style={[
        styles.btn,
        { width: responsiveWidth(width) }, 
        border && { borderWidth: 1, backgroundColor: '#000' },
      ]}
      onPress={() => onPress()}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoundedButton

const styles = StyleSheet.create({
    btn:{
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
        backgroundColor:"#64a5ff",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        color:"#fff",
        fontSize:responsiveFontSize(2),
        fontWeight:"bold",
    }
})