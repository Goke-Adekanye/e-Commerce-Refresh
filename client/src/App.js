import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import Types from "./pages/types/types";
import ProductDetails from "./pages/productDetails/productDetails";
import Admin from "./pages/admin/admin";
import Cart from "./components/cart/cart";
import { Switch, Route, useLocation } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./redux/cart/reducer";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import CheckOut from "./pages/checkOut/checkOut";
import { AnimatePresence } from "framer-motion";
//initial store
const initialStore = {
  cart: [],
};

//store
const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <Provider store={store}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/:productType/:filterType" exact component={Types} />
            <Route
              path="/:productType/:filterType/:productId/details"
              component={ProductDetails}
            />
            <Route path="/admin" exact component={Admin} />
            <Route path="/test" exact component={Cart} />
            <Route path="/checkout" exact component={CheckOut} />
          </Switch>
        </AnimatePresence>
      </Provider>
    </div>
  );
};
export const persistor = persistStore(store);

export default App;
