import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Topbar() {
    return (
        <nav className='topbar'>
            <Link href="" className='flex gap-4 items-center'>
                <Image src="" alt='Image' width={28} height={28} />
                <p></p>
            </Link>
        </nav>
    )
}
