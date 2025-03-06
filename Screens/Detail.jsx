import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ProductContext} from '../Context/ProductsContext';
import ff from '../Services/fontFamily';
import Header from '../Common/Header';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const {products} = useContext(ProductContext);
  const {id} = route.params;
  const productDetail = products.find(product => product.id === id);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../assets/images/back.png')}
        rightIcon={require('../assets/images/bag.png')}
        onClickLeftIcon={() => navigation.push('home')}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.detail}>
          <Image
            source={{uri: productDetail.image}}
            style={styles.image}
            resizeMode={'contain'}
          />
        </View>
        <Text style={styles.title}>{productDetail.title}</Text>
        <View style={styles.txtContent}>
          <View style={styles.cardTop}>
            <Text style={styles.label}>Price</Text>
            <Text style={styles.value}>${productDetail.price}</Text>
          </View>
          <View style={styles.cardTop}>
            <Text style={styles.label}>Stock</Text>
            <Text style={styles.value}>{productDetail.rating.count}</Text>
          </View>
        </View>
        <View style={styles.desc}>
          <Text style={styles.descTxt}>Description</Text>
          <Text style={styles.descCont}>{productDetail.description}</Text>
        </View>

          <View style={styles.quantityContainer}>
            <View style={styles.countBtn}>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={decreaseQuantity}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity
              style={styles.quantityBtn}
              onPress={increaseQuantity}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
            </View>


            <View style={styles.allBtns}>
            <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
            </View>
          </View>
         


      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: responsiveHeight(10),
  },
  image: {
    width: responsiveWidth(90),
    height: responsiveHeight(50),
    borderRadius: 10,

  },
  detail: {
    marginVertical: responsiveHeight(2),
    width: responsiveWidth(100),
    alignItems:"center"
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    fontFamily: ff.mSb,
    paddingHorizontal: responsiveWidth(5),
  },
  txtContent: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1.5),
    padding: responsiveHeight(1),
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  cardTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: responsiveFontSize(1.8),
    color: '#555',
    fontFamily: ff.Reg,
  },
  value: {
    fontSize: responsiveFontSize(2),
    fontFamily: ff.mB,
  },
  desc: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveWidth(2),
  },
  descTxt: {
    fontSize: responsiveFontSize(2),
    color: '#555',
    fontFamily: ff.mB,
  },
  descCont: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: ff.mReg,
    textAlign: 'justify',
  },
allBtns:{
    flexDirection:'row',
    gap:responsiveHeight(2),
},
countBtn:{
    flexDirection:'row',
},
quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(5),
    justifyContent:"space-between",
  },
  quantityBtn: {
    width: responsiveWidth(5),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  btnText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: responsiveFontSize(2),
    marginHorizontal: responsiveWidth(3),
    fontFamily: ff.mB,
  },
  cartButton: {
    backgroundColor: 'rgb(242, 160, 29)',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: 10,
  },
  buyButton: {
    backgroundColor: 'rgb(32, 159, 36)',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontFamily: ff.mB,
  },
});
