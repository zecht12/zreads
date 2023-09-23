import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import logo from '@/public/assets/logo.png'
import Image from 'next/image'

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
        <Image rel="icon" src={logo} a sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
