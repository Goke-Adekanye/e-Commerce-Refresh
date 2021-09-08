import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/reducers/cartReducer";
import showCartReducer from "./cart/reducers/showCartReducer";
import productReducer from "./product/reducers/productReducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  showCart: showCartReducer,
  products: productReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// export default rootReducer;
export default persistReducer(configStorage, rootReducer);
