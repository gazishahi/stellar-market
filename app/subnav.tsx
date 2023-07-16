import React from 'react'
import Link from 'next/link';

const Subnav = () => {
  return (
    <ul className='text-center py-4 text-xl space-x-7'>
        <Link href='/electronics'>Electronics</Link>
        <Link href='/clothing'>Clothing</Link>
        <Link href='/Sports'>Sports</Link>
    </ul>
  )
}

export default Subnav