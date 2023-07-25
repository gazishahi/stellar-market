import type { Metadata } from 'next'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from './components/navbar'
import Subnav from './components/subnav'
import './components/styles/globals.css'
import Provider from './context/AuthContext'

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
      <body className={poppins.className}>
          <Provider>{children}</Provider>
      </body>
    </>
      
  )
}