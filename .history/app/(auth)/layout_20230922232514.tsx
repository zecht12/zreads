import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Zreads',
    description: 'Makes day all out',
}

export default function RootLayout({ children } : {children: React.ReactNode}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <div>
                    <link rel="icon" href="@/public/assets/logo.png" sizes="any" />
                </div>
            </html>
        </ClerkProvider>
    )
}
