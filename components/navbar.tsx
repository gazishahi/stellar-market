'use client';

import Link from 'next/link';
import {useState} from 'react';
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { currentUser, logout } = useAuth()
    

    return (
        <>
        <div className='pt-5'>
            <nav className='header'>
                <Link href="/" className='font-bold text-4xl'>Stellar<span className="text-blue-600">Market</span></Link>
                <input onChange={(event) => setSearchQuery(event.target.value)} type='text' placeholder='Search StellarMarket' className='px-5 py-3 w-1/3 sm:px-5 sm:py-3 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-blue-100 placeholder:text-zinc-400 text-center'></input>
                <Link href="/cart" className=''>Cart</Link>
                 {!currentUser && <a href="/login">Log In</a>}
                 {currentUser && <a onClick={()=>{logout()}}>Log Out</a>}
            </nav>
        </div>
        </>
    )
}

export default Navbar