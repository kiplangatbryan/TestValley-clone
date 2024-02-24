import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import { FaStar } from "react-icons/fa";


 
export default function ProductCard({ product }: any) {
  return (
    <Link  href='#' className="group">
    <div className='bg-white'>
    <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden  xl:aspect-h-8 xl:aspect-w-7 ">
      <img
        src={product.publication.media[0].uri}
        className="h-full w-full object-cover object-center rounded-md"
      />
      
      <div className='absolute bottom-0 left-0 z-20'>
      { 
      product.publication.tagsOnImage.length > 0 ?
      <span className='tags-on-image'>
       { product.publication.tagsOnImage[0]}
        </span> : <span></span>}
      </div>
    </div>
    <h3 className="mt-4 text-sm text-left text-gray-600 line-clamp-2">{product.publication.title}</h3>
    <div className='text-left'>
            {
              !product.publication.priceInfo.couponDiscountPrice &&
              !product.publication.priceInfo.discountPrice
              ?
              <div className="mt-1 text-lg font-medium text-gray-900">
              <span className='includelevy'>
                          {product.publication.priceInfo.price}
                    </span>
              </div>
              
              :

              !product.publication.priceInfo.couponDiscountPrice ?
            <div className="mt-1 text-lg font-medium text-gray-900">
              <span className='discount'>
              {product.publication.priceInfo.discountRate}{'%'}
              </span>
              <span className='includelevy'>
                    {product.publication.priceInfo.discountPrice}
              </span>
            </div>

            :

            <div className="mt-1 text-lg font-medium text-gray-900">
              <span className='discount'>
              {product.publication.priceInfo.couponDiscountRate}{'%'}
              </span>
              <span className='includelevy'>
                    {product.publication.priceInfo.couponDiscountPrice}
              </span>
            </div>
        }
     { product.publication.tagsOnDesc.length > 0 ? 
     <div className='h-10 mb-1 flex items-center'> 
        <span className='text-gray-500 product-tags'>
           {product.publication.tagsOnDesc[0]}
        </span>
    </div> : null }

     <div className='h-4 mb-1 flex items-center'>
        <FaStar className="text-gray-500 rating-icon" aria-hidden="true" /> <span className='text-gray-500 product-tags'>
        {product.publication.rating}
        </span>

     </div>

     { product.publication.preface  ? 
     <div className='h-5 mb-1 bg-gray-200 flex rounded-sm p-1'> 
       <div className='flex items-center'>
       <img className='w-3' src={product.publication.prefaceIconUrl} alt="" />
        {" "}
        <span className='text-gray-500 product-tags'>{product.publication.preface}</span>
       </div>
    </div> : null }
    </div>

    {/* <span className='flex items-center'>
        <span>{product.publication.rating}</span>
    </span> */}
    </div>
  </Link>
  )
}

// https://prod-testvalley.s3.ap-northeast-2.amazonaws.com/static/preface_icon/delivery.png