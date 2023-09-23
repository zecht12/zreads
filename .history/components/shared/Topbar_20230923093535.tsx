import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@

export default function Topbar() {
    return (
        <nav className='topbar'>
            <Link href="" className='flex gap-4 items-center'>
                <Image src="" alt='Image' width={28} height={28} />
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Zreads</p>
            </Link>
        </nav>
    )
}
