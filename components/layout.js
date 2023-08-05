import { Inter, Roboto, Poppins } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Subnav from '@/components/subnav'


export default function Layout(props){
  const {children} = props

    return (
        <div>
            <Navbar/>
            <Subnav/>
            {children}
            <Footer/>
        </div>
        
    )
}