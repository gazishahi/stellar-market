import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from './navbar'
import Subnav from './subnav'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'StellarMarket',
  description: 'To fulfill your consumer needs!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar/>
      <Subnav/>
      <body className={poppins.className}>{children}</body>
      <Footer/>
    </>
      
  )
}