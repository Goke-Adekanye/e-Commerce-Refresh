import { ADD, DECREASE, INCREASE, REMOVE,CLEAR_CART } from './actions'
import { handleAddToCart, handleRemoveFromCart,handleDecreaseFromCart } from './cart.utils'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStore ={
  cart: []
}

export const reducer = (state, action) => {

  if (action.type === DECREASE){
    return  { 
        ...state, 
        cart: handleDecreaseFromCart ({
        prevCartItems: state.cart,
        CartItemToReduce: action.payload
    }) 
    }; 
  }
  if (action.type === CLEAR_CART){
    return{ 
      ...state, 
      ...initialStore
    }
  };
  if (action.type === INCREASE){
      return{ ...state, amount: state.amount + 1};
  }
  if (action.type === ADD){   

    return  { 
        ...state, 
        cart: handleAddToCart({
        prevCartItems: state.cart,
        nextCartItem: action.payload
    }) 
    }; 
  }
  if (action.type === REMOVE){   

    return  { 
        ...state, 
        cart: handleRemoveFromCart({
        prevCartItems: state.cart,
        CartItemToRemove: action.payload
    }) 
    };
     
  }
  return state;
  
  }

  // export const checkOutReducer = (state, action) => {
    
  //   if (action.type === CHECKOUT){   

  //     return  { 
  //         ...state, 
  //         checkOutDets: action.payload
      
  //     }; 
  //   }



  // }






  const configStorage = {
      key: 'root',
      storage,
      whitelist: ['cart']
  }

  export default persistReducer(configStorage, reducer);