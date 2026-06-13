import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./counterSlice";
import  cartSlice from "./cartSlice";
const store = configureStore({
    reducer:{
        counterStore: counterSlice,
        cartStore: cartSlice
    }
})

export default store