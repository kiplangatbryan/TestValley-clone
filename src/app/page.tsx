'use client'

import { useEffect, useState } from 'react'
import AppHeader from '@/components/AppHeader';
import MainShortcut from '@/components/MainShortcut';
import TopBannerSlide from '@/components/TopBannerSlide';
import ProductListingSection from '@/components/ProductListingSection';


export default function Example() {

  const [collections, setCollection ] = useState([])

  
  const bb = "https://api.testvalley.kr/collections"
  
      useEffect(() => {
            fetch("https://api.testvalley.kr/collections")
            .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
            .then((allCollections) => {
              const data =   allCollections.items.filter((colllection: any )=> colllection.type == 'SINGLE')
              setCollection(data)

            })
    }, [])


  return (
    <div className="">
      <div className='h-full relative'>

      <AppHeader actionBtn={undefined} />



       <div className='px-5 lg:px-32 mobile-layout'>
         <TopBannerSlide />
        <MainShortcut />
        { collections && 
      
        collections.map( (collection: any) => <ProductListingSection 
          key={collection.id}
                title={collection.title}
                subtitle={collection.subtitle}
                items={collection.items}
              />
          )

        }
       </div>
  
       </div>
    </div>
  )
}

