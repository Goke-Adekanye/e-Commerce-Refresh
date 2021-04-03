import { createSelector } from 'reselect';

export const selectCartData = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartData],
  cart => cart
);
export const selectCartItems2 = createSelector(
  [selectCartData],
  cart => cart
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cart =>
    cart.reduce(
      (quantity, cartItem) =>
        quantity + cartItem.quantity
      , 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cart =>
    cart.reduce(
      (quantity, cartItem) =>
        quantity + cartItem.quantity * cartItem.price,
    0)
);

// export const selectCartSubTotal = createSelector(
//   [selectCartItems2],
//   cart =>
//        cartItem.quantity * cart.price 
// );
