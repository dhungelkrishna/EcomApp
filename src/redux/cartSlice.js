import { createSlice } from "@reduxjs/toolkit";
export let  cartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        },
        reducers: {
            addToCart: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                let cartData = requestData.payload
                initialState.cart = [cartData, ...initialState.cart]
                localStorage.setItem("cart", JSON.stringify(initialState.cart))

            },
            deleteCart: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                let {id} = requestData.payload
                console.log(id);
                
                initialState.cart = initialState.cart.filter((item) => item.cartObj.id !== id)
                localStorage.setItem("cart", JSON.stringify(initialState.cart))

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