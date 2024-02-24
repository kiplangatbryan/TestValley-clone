'use client'

import Link from 'next/link';
import React from 'react'
import { Bars3Icon, HomeIcon, HeartIcon,UserIcon } from '@heroicons/react/24/outline';
import {   FaSearch } from "react-icons/fa";
import { usePathname } from 'next/navigation';

export default function BottomNavigation() {
  const pathname  = usePathname()

  const isActive = (href: string) => pathname == href

    function classNames ( ...args: Array<string>): string  {
      return args.join(' ')
    }

    const routes = [
        { name: '홈', href: "/", icon: HomeIcon},
        { name: '검색', href: "/search", icon: FaSearch},
        { name: '카테고리', href: "/category", icon: Bars3Icon},
        { name: '좋아요', href: "/fav", icon: HeartIcon},
        { name: '마이페이지', href: "/profile", icon: UserIcon}
    ]

  return (
    <aside className='md:hidden fixed bottom-0 bg-white py-5 px-4 right-0 left-0 flex items-center justify-between mobile-menu z-50'>

        { routes.map((route, index) => <Link key={index} href={route.href} className={classNames('flex', 'flex-col', 'items-center')}>
                    <route.icon 
                    className={classNames("h-6 w-6, text-gray-500", isActive(route.href) ? 'active': '')}                     
                    />
                <span className={classNames('text-gray-600 text-sm mobile-title', isActive(route.href) ? 'active': '')}>
                {route.name}
                </span>
            </Link>
        )

        }

    </aside>
  )
}
