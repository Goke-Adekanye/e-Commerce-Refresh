import React, {useState,createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) =>{

    const [cart, setCart] = useState([]);
    let cartLocal = null;
    const saveLocalCart = () => {
        if (localStorage.getItem('cart')===null){
            localStorage.setItem('cart', JSON.stringify([]));
        }else{
            localStorage.setItem('cart', JSON.stringify(cart) );
        }
    }
    const getLocalCart = () => {
      if (localStorage.getItem('cart')===null){
          localStorage.setItem('cart', JSON.stringify([]));
      }else{
        cartLocal= JSON.parse(localStorage.getItem('cart'));
        setCart(cartLocal);
      }
    }
    
    

    return(

        <CartContext.Provider value = {[cart, setCart],saveLocalCart(),getLocalCart()}>
            {props.children}
        </CartContext.Provider>
    );
}



 