import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      console.log("first",products)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>
  );
};
