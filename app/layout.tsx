import type { Metadata } from 'next'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from './components/navbar'
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
    <>
      <UserProvider>
        <Navbar/>
      </UserProvider>
      <Subnav/>
      <body className={poppins.className}>
        <UserProvider>  
          {children}
        </UserProvider>
      </body>
    </>
      
  )
}