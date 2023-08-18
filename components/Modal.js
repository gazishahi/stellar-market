import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

export default function Modal(props) {
    const { setOpenModal } = props
    const [_document, set_document] = useState(null)
    const { logout } = useAuth()

    useEffect(() => {
        set_document(document)
    }, [])

    if (!_document) { return null }

    return ReactDom.createPortal(
        <div className={poppins.className}>
        <motion.div className='fixed inset-0 w-full h-full bg-gray-900' initial='hidden' animate='visible' exit='exit' variants={{
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 0.6,
                transition: {duration: 0.4,}
            },
            exit: {
                opacity: 0,
                transition: {duration: 0.4,}
            }
        }}>     
        </motion.div>
        <motion.div className='fixed inset-0 w-full h-full' initial='hidden' animate='visible' exit='exit' variants={{
            hidden: {
                x: "100%",
                opacity: 0
            },
            visible: {
                x: "0%",
                opacity: 1,
                transition: {
                    ease: 'easeOut',
                    duration: 0.4,
                }
            },
            exit: {
                x: "100%",
                opacity: 0,
                transition: {duration: 0.4,}
            }
        }}>
        <div className='fixed inset-y-0 right-0 bg-white text-slate-900 text-lg sm:text-xl flex flex-col w-1/3 rounded-s-3xl'>
            <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
                <h1 className='text-2xl sm:text-5xl select-none'>Menu</h1>
                <i onClick={() => setOpenModal(false)} className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer"></i>
            </div>
            <div className='p-4 flex flex-col gap-3'>
                <h2 onClick={() => {
                    logout()
                    setOpenModal(false)
                }} className='select-none duration-300 hover:pl-2 cursor-pointer'>Logout</h2>
            </div>
            <div className='p-4 flex flex-col gap-3'>
                <h2 onClick={() => {
                    setOpenModal(false)
                }} className='select-none duration-300 hover:pl-2 cursor-pointer'><a href='/productForm'>Add Product</a></h2>
            </div>
        </div>
        </motion.div>
        </div>,
        _document.getElementById('portal')
    )
}