import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'

export default function Leftsidebar() {
    return (
        <section className='custom-scrollbar leftsidebar'>
            <div className='flex flex-1 flex-col gap-6 px-6 w-full'>
                {sidebarLinks.map((link) => (
                    <Link href={link.route} key={link.label} className=''>
                    Href
                    </Link>
                ))}
            </div>
        </section>
    )
}
