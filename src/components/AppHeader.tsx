
import { useEffect, useState } from 'react';
import { Dialog,  } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShareIcon, BellIcon, HomeIcon, HeartIcon,UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {   FaBell } from "react-icons/fa6";
import {   FaSearch } from "react-icons/fa";
import BottomNavigation from './BottomNavigation';

interface  ButtonLabelProp {
  actionBtn: string | undefined
}

export default function AppHeader ({ actionBtn }: ButtonLabelProp) {

  
    return (
      <>
      <header className="fixed inset-x-0 top-0 left-0 right-0 z-50 md:px-5 lg:px-32 bg-white">
      <nav className="hidden  md:flex items-center justify-between py-4 " aria-label="Global">
     
          <div className='flex items-center'>
            <Link href="/" className="text-emerald-400 font-semibold  text-2xl">
                TestValley
            </Link>

            <button
              type="button"
              className="ml-2.5 inline-flex  items-center justify-center rounded-md p-2.5 text-emerald-400"
            
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            
              <span className="ml-4 text-emerald-400" >카테고리</span>
            </button>

                <div className="flex relative ml-14">
                  <span className='absolute left-3 top-2 text-gray-600'>
                      <FaSearch 
                        size="20px"
                        fontWeight={200}
                        className="text-gray-600"              
                      />
                  </span>
                  <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-sm border-0 py-2 px-2 pl-10 text-gray-600 shadow-sm ring-0 ring:inset  placeholder:text-grey-900  md:text-md focus:ring-0.2 ring-text-emerald-400  sm:text-sm sm:leading-6"
                />
              </div>

          </div>

             
            
            <div>
            <Link
                  href="#"
                  className="flex items-center"
                > 
              <img src='https://www.testvalley.kr/common/home-event.svg' alt="" />
                <span className='text-gray-800'>로그인 / 회원가입</span>
              </Link> 
            </div>

        
      </nav>
   


    </header>

      <header className="md:hidden md:px-5 lg:px-32 bg-white">
    <nav className="md:hidden flex items-center justify-between py-3 bg-white mobile-menu" aria-label="Global">
     
     <Link href="/" className="text-emerald-400 font-semibold  text-2xl">
         TestValley
     </Link>

     <div className='flex items-center'> 
                <Link href='#'>
                  <BellIcon 
                        className="h-6 w-6 text-gray-600"             
                    />
                </Link>

                <Link href='#' className='ml-3'>
                  <FaSearch 
                      size="20px"
                      fontWeight={200}
                      className="text-gray-600"              
                    />
                </Link>



        </div>


      
    </nav>
    </header>
    
    <BottomNavigation />
   
      </>
    );
}

