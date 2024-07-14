import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { medicines } from '../../../static';
import ProductCard from '../../components/ProductCard';

const Category = () => {
    const location = useLocation();
    const [products, setProducts] = useState([...medicines]);
    return (
        <>
        <div className='mt-[120px] text-center ' >Medecines for</div>
        <h2 className='mx-auto text-[40px] font-semibold text-center' >{location?.state?.cat}</h2>
        <div className="w-full h-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center p-2 mt-8">
            {products?.filter(product =>
                product?.category == location?.state?.cat)?.map((item, i) => (
                    <ProductCard product={item} key={i} />
                ))}
        </div>
        </>
    )
}

export default Category