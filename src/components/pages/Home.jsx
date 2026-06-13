import React from 'react'
import { useDispatch } from 'react-redux'
import {increment} from '../../redux/counterSlice'
const Home = () => {
  let dispatch = useDispatch()
  return (
    <div>
      <h1>Home</h1>
      <button
      onClick={() => {
        dispatch(increment())
      }} className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">Change Count</button>
    </div>
  )
}

export default Home