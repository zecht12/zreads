import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/logo.png'

export default function Topbar() {
    return (
        <nav className='topbar'>
            <div className='flex gap-4 items-center cursor-pointer'>
                <Link></Link>
                <Image src={logo} alt='Image' width={28} height={28} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Zreads</p>
            </div>
        </nav>
    )
}