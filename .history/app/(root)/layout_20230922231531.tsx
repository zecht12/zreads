import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo from 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zreads',
  description: 'Makes day all out',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Image rel="icon" alt='image' src={} sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
