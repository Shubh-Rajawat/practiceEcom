import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import { medicines } from '../../../static';
import ProductCard from '../../components/ProductCard';
import Adverts from '../../components/Adverts';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
let categories = [
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Prescription"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "OverTheCounter"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Homeopathic"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Nutrition"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Children"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Accessories"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Skincare"
  },
  {
    img: "https://placehold.co/50x50?text=category",
    name: "Lifestyle"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([...medicines]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    const filteredProducts = medicines.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
    );
    setProducts(filteredProducts);
  };

  useEffect(()=>{
    if(!Cookies.get("userToken")){
      navigate("/login")
    }
  },[])

  useEffect(()=>{
    if(searchQuery == ''){
      setProducts(medicines);
    }
  },[searchQuery])

const catClick = (item) => {
  navigate("/category",{
    state:{
      cat : item.name
    }
  })
}

  return (
    <>
      <div className='mt-[72px] z-10 relative overflow-x-hidden'>
        <Carousel />
      </div>
      <section className='w-full h-full'>
        <div className="categories w-full flex justify-evenly items-center my-4 overflow-x-scroll gap-8 select-none">
          {categories.map((cat, index) => (
            <div className="flex flex-col justify-between items-center" key={index} onClick={()=>{
              catClick(cat)
            }}>
              <img src={cat?.img} alt="" className='rounded-full' />
              <span className='text-xs'>{cat?.name}</span>
            </div>
          ))}
        </div>
        {/* Add filter here */}
        
          <div class="relative mt-10 mb-5 md:mx-auto w-full md:w-[500px]">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>

            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Your Medicine" 
            value={searchQuery}
            autoComplete='off'
            onChange={(event)=>{
              const query = event.target.value.toLowerCase();
              setSearchQuery(query);
            }}
            />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-[#33186B] hover:bg-[#33186B]/60 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            onClick={handleSearch}
            >Search</button>
          </div>
        




        <div className="w-full h-full mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-2">
          {products?.length ? products?.slice(0, 4)?.map((item, i) => (
            <ProductCard product={item} key={i} />
          )) :
          <div className="text-3xl font-bold flex justify-center my-40 w-full">
            Not Found
          </div>
          }
        </div>
       {/* {!searchQuery && <Adverts />} */}
        <div className="w-full h-full mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-2">
          {products?.slice(4, 8)?.map((item, i) => (
            <ProductCard product={item} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
