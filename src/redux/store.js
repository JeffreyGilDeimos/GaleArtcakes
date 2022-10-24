import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

//Reducers
import cartReducer from "./reducers/cartReducer";
import productReducer from './reducers/productReducer';
import reviewReducer from "./reducers/reviewReducer";
import likeReducer from "./reducers/likeReducer";
import paymentReducer from "./reducers/paymentReducer";
import receiptReducer from "./reducers/receiptReducer";

export const store = configureStore({
  reducer: {
    productList: productReducer,
    reviewList: reviewReducer,
    cartLists: cartReducer,
    likeList: likeReducer,
    paymentList: paymentReducer,
    receiptList: receiptReducer,
  },
  middleware: [
    thunk,
    promiseMiddleware,
    promise,
    logger,
]
});
