import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {Autoplay } from 'swiper/modules';
import ProductCard from './Product';


// type ItemCategoryLabel = {
//     title: string,
//     description: string
// }

interface ProductListingSectionProps {
   title: string,
   subtitle: string,
   items: []
}

export default function ProductListingSection({
    title,
    subtitle,
    items
}: ProductListingSectionProps) {
  return (
    <div className='flex items-start flex-wrap md:flex-nowrap my-0 md:my-8 gap-x-10 swiper-container' >
    <div className='md:w-1/5 md:min-w-1/5 mb-5 md:mb-0'>
        <h1 className="text-left  text-2xl font-semibold leading-8 text-gray-800 line-clamp-2">
        {title}
        </h1>
        <p className=" md:mt-3 text-sm  text-gray-500">
        {subtitle}
      </p>
    </div>
      <div className="w-full md:w-4/5">
   <div className='hidden md:block'>
   <Swiper watchSlidesProgress={true} 
         loop={true}
         autoplay={{
           delay: 5000,
           disableOnInteraction: false,
         }}
        spaceBetween={20}
         modules={[Autoplay]}
      slidesPerView={4} className="mySwiper md:hidden">
        {
          items.map( (product: any) => <SwiperSlide
         key={product.uuid}
        > 
          <ProductCard  product={product}/>
        </SwiperSlide> )}
       
      </Swiper>
    </div> 
    
      <dl className="md:hidden grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3  md:grid-cols-2 lg:gap-y-16">
        {
          items.map( (product: any) => 
              <ProductCard  key={product.uuid} product={product}/>
        )}
    </dl>   
      </div>
     </div>
  )
}
