'use client';

import Link from 'next/link';
import {useState} from 'react';
import { useAuth } from '../context/AuthContext'
import Modal from '../components/Modal'
import Cart from '../components/cart'
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { currentUser, logout } = useAuth()
    const [openMenu, setOpenMenu] = useState(false)
    const [openCart, setOpenCart] = useState(false)

    return (
        <>
        <AnimatePresence>{openMenu && <Modal setOpenModal={setOpenMenu}/>}</AnimatePresence>
        <AnimatePresence>{openCart && <Cart setOpenCart={setOpenCart}/>}</AnimatePresence>
        <div className='pt-5'>
            <nav className='header'>
                <Link href="/" className='font-bold text-4xl'>Stellar<span className="text-blue-600">Market</span></Link>
                <input onChange={(event) => setSearchQuery(event.target.value)} type='text' placeholder='Search StellarMarket' className='px-5 py-3 w-1/3 sm:px-5 sm:py-3 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-blue-100 placeholder:text-zinc-400 text-center'></input>
                {/* <Link href="/cart" className=''>Cart</Link> */}
                {currentUser && <button onClick={()=>{setOpenCart(true)}} className='text-zinc-200'>Cart</button>}
                {!currentUser && <a href="/login">Log In</a>}
                {currentUser && <button onClick={()=>{setOpenMenu(true)}} className='text-zinc-200'>Menu</button>}
            </nav>
        </div>
        </>
    )
}

export default Navbar