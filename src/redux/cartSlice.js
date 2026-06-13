import { createSlice } from "@reduxjs/toolkit";
export let  cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cart:[],
        },
        reducers: {
            addToCart: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                initialState.count += 1

            },
            deleteCart: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                initialState.count -= 1

            }
        }
    }
)
export const { addToCart, deleteCart} = cartSlice.actions
export default cartSlice.reducer