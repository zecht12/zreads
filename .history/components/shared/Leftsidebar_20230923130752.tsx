import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

export default function Leftsidebar() {
    return (
        <section className='custom-scrollbar leftsidebar'>
            <div className='flex flex-1 flex-col gap-6 px-6 w-full'>
                {sidebarLinks.map((link) => (
                    <Link href={link.route} key={link.label} className='leftsidebar_link'>
                        <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                        <p>{link.label}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
