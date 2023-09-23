import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/logo.png'
import logout from '@/public/assets/logout.svg'
import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs'

export default function Topbar() {
    return (
        <nav className='topbar'>
            <div className='flex gap-4 items-center'>
                <Link href="" className='cursor-pointer'>
                    <Image src={logo} alt='Image' width={28} height={28} />
                </Link>
                <p className='text-heading3-bold text-light-1 max-xs:hidden'>Zreads</p>
            </div>
            <div className='flex items-center gap-1'>
                <div className='block md:hidden'>
                    <SignedIn>
                        <SignOutButton>
                            <div className='flex cursor-pointer'>
                                <Image src={logout} alt='logout' width={24} height={24} />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher appearance={( element:{ or })} />
            </div>
        </nav>
    )
}
