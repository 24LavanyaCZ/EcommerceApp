import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';

const BottomTab = ({ setSelectedPage }) => {
  return (
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
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
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
