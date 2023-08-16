import { Inter, Roboto, Poppins } from 'next/font/google'

import Navbar from '../components/navbar'
import Footer from './footer'
import Subnav from './subnav'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Layout(props){
  const {children} = props

    return (
        <div className={poppins.className}>
            <Navbar/>
            <Subnav/>
            {children}
            <Footer/>
        </div>
        
    )
}