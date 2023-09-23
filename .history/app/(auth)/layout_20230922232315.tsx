import React, { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zreads',
    description: 'Makes day all out',
}

export default function RootLayout({ children } : {children: ReactNode.}) {
    return (
        <html lang="en">
            <div>
                <link rel="icon" href="@/public/assets/logo.png" sizes="any" />
            </div>
        </html>
    )
}
