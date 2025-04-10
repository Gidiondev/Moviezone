import React from 'react'
import MenuItem from './MenuItem'
import {FaHome , FaInfo} from "react-icons/fa"
import Link from 'next/link';

function Header() {
  return (
    <div className='flex justify-between item-center p-3 max-w-6xl mx-auto ' >
        <div className='flex gap-4'>
            <MenuItem title='Home' address="/" Icon={FaHome}/>
            <MenuItem title='About' address="/about" Icon={FaInfo}/>
        </div>
        <Link href={'/'} className='flex gap-1 item-center '>
            <span className='text-xl bg-amber-500 font-bold py-1 px-1 rounded-lg'>Movie</span>
            <span className='text-xl hidden sm:inline'>zone</span>
        </Link>
    </div>
  )
}

export default Header

    
