'use client';

import Link from 'next/link';
import {useState} from 'react';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className='pt-5'>
            <nav className='header'>
                <Link href="/">StellarMarket</Link>
                <input onChange={(event) => setSearchQuery(event.target.value)} type='text' placeholder='Search StellarMarket' className='px-5 py-3 w-1/3 sm:px-5 sm:py-3 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-blue-100 placeholder:text-zinc-400 text-center'></input>
                <ul>
                <Link href="/cart">Cart</Link>
                <Link href="/login">Log in</Link>   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar