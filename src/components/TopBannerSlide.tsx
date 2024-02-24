import React, { useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function TopBannerSlide() {
    const [bannerItems, setBannerItems ] = useState([])

    const bb = "https://api.testvalley.kr/main-banner/all"
    
    useEffect(() => {
        fetch("all.json")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then((data) => {
            console.log(data)
            setBannerItems(data)
        })
}, [])

  return (
    <div className='mt-5 md:mt-24'>
      <div className='hidden md:block'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner-swiper"
      >
        { bannerItems && bannerItems.map((banner: any) =>  <SwiperSlide
            key={banner.mainBannerId}

        >
            <img className='w-full' src={banner.pcImageUrl} alt="" />

        </SwiperSlide>) }
      </Swiper>
      </div>
       <div className='md:hidden '>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner-swiper"
      >
        { bannerItems && bannerItems.map((banner: any) =>  <SwiperSlide
            key={banner.mainBannerId}

        >
            <img className='w-full' src={banner.mobileImageUrl} alt="" />

        </SwiperSlide>) }
      </Swiper>
       </div>
    </div>
  )
}
