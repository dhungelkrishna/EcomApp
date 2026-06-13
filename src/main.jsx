import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Cart from './components/pages/Cart.jsx'
import Home from './components/pages/Home.jsx'
import MainLayout from './components/common/MainLayout.jsx'
import 'flowbite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
