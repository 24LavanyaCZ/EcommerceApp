import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import Header from '../Common/Header';
import {useNavigation} from '@react-navigation/native';
import {ProductContext} from '../Context/ProductsContext';
import ff from '../Services/fontFamily';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CategoryPage = ({route}) => {
  const {category} = route.params
  console.log(category)
  const navigation = useNavigation();
  const {products} = useContext(ProductContext);

  const categoryItems = products.filter(
    product => product.category === category,
  );

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../assets/images/back.png')}
        rightIcon={require('../assets/images/bag.png')}
        onClickLeftIcon={() => navigation.push('home')}
      />
      <Text style={styles.head}>{category}</Text>

      <FlatList
        data={categoryItems}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}onPress={()=> navigation.navigate('detail',{id: item.id})}>
          
            <Image
              source={{uri: item.image}}
              style={styles.image}
              resizeMode={'contain'}
            />

           
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>

          
            <View style={styles.txtContent}>
              <View style={styles.cardTop}>
                <Text style={styles.label}>Price</Text>
                <Text style={styles.value}>${item.price}</Text>
              </View>

              <View style={styles.cardTop}>
                <Text style={styles.label}>Stock</Text>
                <Text style={styles.value}>{item.rating.count}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{height: responsiveHeight(5)}} />}
        ListFooterComponent={() => <View style={{height: responsiveHeight(3)}} />}
        />
    </View>
  );
};

export default CategoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    fontFamily: ff.mB,
    fontSize: responsiveFontSize(2.5),
    paddingHorizontal: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    textTransform:'capitalize'
  },
  list: {
    padding: responsiveWidth(3),
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: responsiveHeight(1),
    marginHorizontal: responsiveWidth(2),
    elevation: 10, 
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: responsiveWidth(30),
    height: responsiveHeight(25),
    borderRadius: 10,
  },
  title: {
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    fontFamily:ff.mReg
  },
  txtContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5),
    padding: responsiveHeight(1),
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  cardTop: {
    alignItems: 'center',
    
    flex: 1,
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    color: '#555',
  },
  value: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});
