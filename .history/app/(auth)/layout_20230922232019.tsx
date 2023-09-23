import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zreads',
    description: 'Makes day all out',
}

export default function layout() {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="@/public/assets/logo.png" sizes="any" />
            </head>
            <div>
            <link rel="icon" href="@/public/assets/logo.png" sizes="any" />
            </div>
        </html>
    )
}
