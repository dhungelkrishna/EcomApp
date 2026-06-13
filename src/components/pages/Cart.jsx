import React from 'react'
import {decrement} from '../../redux/counterSlice'
import { useDispatch } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch()

  return (
    <div>
        <h1>Cart</h1>
        <button
        onClick = {() => {
            // dispatch an action to decrement the count
            dispatch(decrement())
        }}
         className='p-3 bg-red-500 text-white'>Decrement Cart</button>
    </div>
  )
}

export default Cart
