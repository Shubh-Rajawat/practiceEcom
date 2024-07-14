import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center p-4 bg-transparent w-full fixed top-0 bg-white shadow-lg z-50">
    <div className="flex items-center" onClick={()=>{
      navigate("/")
    }}>
      <img src="https://placehold.co/40x40?text=Logo" alt="NeuraBug Logo" className="mr-2" />
      <span className="text-xl font-bold text-zinc-900 ">TELEMEDICINE</span>
    </div>
   <div className="flex items-center">
    <TiShoppingCart size={30} className='mx-6' onClick={()=>{
      navigate("/cart")
    }} />
   <div className="flex items-center">
      <img src="https://placehold.co/40x40/33186B/FFFFFF?text=Avatar" alt="User Avatar" className="rounded-full mr-2" />
      <span className="text-zinc-900 ">John Wick</span>
    </div>
   </div>
  </header>
  )
}

export default Header