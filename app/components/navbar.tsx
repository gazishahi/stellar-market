'use client';

import Link from 'next/link';
import {useState} from 'react';
import {useUser} from '@auth0/nextjs-auth0/client'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const {user, error, isLoading} = useUser();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;
    if(user) {
        console.log(user)
    }
    
    return (
        <>
        <div className='pt-5'>
            <nav className='header'>
                <Link href="/" className='font-bold text-4xl'>Stellar<span className="text-blue-600">Market</span></Link>
                <input onChange={(event) => setSearchQuery(event.target.value)} type='text' placeholder='Search StellarMarket' className='px-5 py-3 w-1/3 sm:px-5 sm:py-3 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-blue-100 placeholder:text-zinc-400 text-center'></input>
                <Link href="/cart" className=''>Cart</Link>
                {user ? (<a href="/api/auth/logout">Logout</a>) : <a href="/api/auth/login">Log In</a>}
            </nav>
        </div>
        </>
    )
}

export default Navbar