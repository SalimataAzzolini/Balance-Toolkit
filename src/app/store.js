import { configureStore } from "@reduxjs/toolkit";
import walletReducer from '../features/wallet/walletSlice';


const store = configureStore({
  reducer: {
    wallet : walletReducer,
  },
});
export default store;
