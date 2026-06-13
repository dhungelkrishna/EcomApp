import { createSlice } from "@reduxjs/toolkit";
export let  counterSlice = createSlice(
    {
        name: "counter",
        initialState: {
            count:0
        },
        reducers: {
            increment: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                initialState.count += 1

            },
            decrement: (initialState, requestData ) => {
                // initialState - Complte old state will be passed automatically regardless of name
                // requestData - payload : anyData
                initialState.count -= 1

            }
        }
    }
)
export const { increment, decrement} = counterSlice.actions
export default counterSlice.reducer