import React from 'react'
import { ProductsCard } from './ProductsCard'

export const Products = ({products}) => {
  // console.log(products)
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-[#D6EADF] text-black-400 py-2 w-80 text-center'>Shopping with LowdingShop</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
             ipsum dolor sit amet, 
             consectetur adipisicing elit. Quae 
             perferendis nihil commodi repudiandae veniam aperiam eius nesciunt quis fugiat maiores accusantium repellat velit quod saepe dolorem facilis,
              impedit quas nobis.</p>
        </div>
        <div className='max-w-screen-xl max-auto py-10 pl-10 grid grid-cols-4 gap-10'>
          {
            products.map((item) => (
             <ProductsCard  key={item._id} product={item} />
            ))
          }
        </div>
    </div>

  );
}
