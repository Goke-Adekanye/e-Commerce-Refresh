export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find((cartItem) => cartItem.name === nextCartItem.name);
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExist = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExist) {
    return prevCartItems.map((cartItem) =>
      cartItem.name === nextCartItem.name
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveFromCart = ({ prevCartItems, CartItemToRemove }) => {
  return prevCartItems.filter((item) => item.name !== CartItemToRemove.name);
};

export const handleDecreaseFromCart = ({ prevCartItems, CartItemToReduce }) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.name === CartItemToReduce.name
  );
  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.name !== existingCartItem.name
    );
  }

  return prevCartItems.map((cartItem) =>
    cartItem.name === existingCartItem.name
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

// Code to open cart
// export const handleClick = ({ prevState, currState }) => {
//   if (prevState.state === currState) {
//     return {
//       cartShow: !currState,
//     };
//   }

//   return {
//     cartShow: currState,
//   };
// };
