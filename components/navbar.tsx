'use client';

import Link from 'next/link';
import {useState} from 'react';
import { useAuth } from '../context/AuthContext'
import Modal from './Modal'
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
                <Link href="/" className='font-bold text-4xl hover:bg-gray-600 transition ease-in-out duration-40'>Stellar<span className="text-blue-600">Market</span></Link>
                <input onChange={(event) => setSearchQuery(event.target.value)} type='text' placeholder='Search StellarMarket' className='px-5 py-3 w-1/3 sm:px-5 sm:py-3 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-blue-100 placeholder:text-zinc-400 text-center' value={searchQuery}></input>
                {currentUser && <button onClick={()=>{setOpenCart(true)}} className='text-zinc-200 px-4 py-2 rounded-full hover:bg-gray-600 transition duration-500 ease-in-out'>Cart</button>}
                {!currentUser && <a href="/login">Log In</a>}
                {currentUser && <button onClick={()=>{setOpenMenu(true)}} className='text-zinc-200 px-4 py-2 rounded-full hover:bg-gray-600 transition duration-500 ease-in-out'>Menu</button>}
            </nav>
        </div>
        </>
    )
}

export default Navbar