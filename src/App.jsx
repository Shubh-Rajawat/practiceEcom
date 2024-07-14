import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import SingleProduct from './pages/SingleProduct'
import Header from './components/Header'
import Category from './pages/category/Category'

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
