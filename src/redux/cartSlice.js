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

            },
            changeQty: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                initialState.count = requestData.payload
        },
    }
}
)
export const { addToCart, deleteCart, changeQty } = cartSlice.actions
export default cartSlice.reducer