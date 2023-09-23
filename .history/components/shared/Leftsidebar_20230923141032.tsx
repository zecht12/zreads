"use client";

import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';

export default function Leftsidebar() {
    const router = useRouter()
    const pathname = usePathname()

    return (
        <section className='custom-scrollbar leftsidebar'>
            <div className='flex flex-1 flex-col gap-6 px-6 w-full'>
                {sidebarLinks.map((link) => {
                    const isActive = (pathname.includes (link.route) && link.route.length > 1) || pathname === 
                    return(
                        <Link href={link.route} key={link.label} className='leftsidebar_link'>
                            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                            <p className='text-slate-100 max-lg:hidden'>{link.label}</p>
                        </Link>
                )})}
            </div>
        </section>
    )
}
