import type { Metadata } from 'next'
import { Inter, Roboto, Poppins } from 'next/font/google'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Subnav from './components/subnav'
import './components/styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'


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
    <UserProvider>
    <html lang="en">
        <body className={poppins.className}>
        <Navbar/>
        <Subnav/>
        {children}
        </body>
        <Footer/>
    </html>
    </UserProvider>
  )
}