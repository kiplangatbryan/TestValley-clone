import { ShortcutItem } from '@/types';
import React from 'react'

import Link from "next/link"

interface ShortcutItemProps {
   shortcut: ShortcutItem
}

export default function Shortcut({ shortcut }: ShortcutItemProps) {
  return (
    <Link href="#" className='flex flex-col items-center'>
        <img className='w-11 md:w-12' src={shortcut.imageUrl} alt="" />
        <div className='text-sm text-black mobile-title'>
            {shortcut.title}
        </div>
    </Link>

  )
}
