import { createSelector } from "reselect";
// export const selectCartData = (state) => console.log(state);
export const selectCartData = (state) => state.cart.cart;

export const selectCartItemsCount = createSelector([selectCartData], (cart) =>
  cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartData], (cart) =>
  cart.reduce(
    (quantity, cartItem) => quantity + cartItem.quantity * cartItem.price,
    0
  )
);
// export const selectCartSubTotal = createSelector(
//   [selectCartData2],
//   cart =>
//        cartItem.quantity * cart.price
// );
// export const selectCartData = (state) => state.cart;
