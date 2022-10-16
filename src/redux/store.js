import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

//Reducers
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";
import productReducer from './reducers/productReducer';

export const store = configureStore({
  reducer: {
    productList: productReducer,
    activeUser: userReducer,
    cartLists: cartReducer,
  },
  middleware: [
    thunk,
    promiseMiddleware,
    promise,
    logger,
]
});
