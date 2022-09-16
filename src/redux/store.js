import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    activeUser: userReducer,
    cartLists: cartReducer,
  },
});
