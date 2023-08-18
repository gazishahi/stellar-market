import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google'
import { useCart } from '../context/CartContext';

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
  })

export default function Cart(props) {
    const { setOpenCart } = props
    const [_document, set_document] = useState(null)
    const { logout } = useAuth()
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, computeTotalCost } = useCart();

    useEffect(() => {
        set_document(document)
    }, [])

    async function handleCheckout() {
        const response = await fetch('/api/stripe/createCheckoutSession', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: cart,  // assuming cart is an array of items
            }),
        });
    
        const { sessionId } = await response.json();
        const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);  // Make sure you've set up this env variable
    
        stripe.redirectToCheckout({
            sessionId,
        });
    }
    

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
        <div className='fixed inset-y-0 right-0 bg-white text-slate-900 text-lg sm:text-xl flex flex-col w-1/3 rounded-s-3xl h-full'>
            <div className='flex items-center justify-between border-b border-solid border-slate-900 p-4'>
                <h1 className='text-2xl sm:text-5xl select-none'>Cart</h1>
                <i onClick={() => setOpenCart(false)} className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer"></i>
        </div>
        <div className='p-4 flex flex-col gap-3 flex-grow overflow-y-auto'>
        {cart.map(product => (
            <div key={product.id} className="flex items-center justify-between">
                <div>
                <h2>{product.name}</h2>
                <img src={product.images[0]} alt={product.name} className="w-24 h-24 object-cover mb-2" />
                <p>Price: ${(product.prices[0].unit_amount / 100).toFixed(2)}</p>
                <div className="flex items-center gap-2">
                    <button onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>Quantity: {product.quantity}</span>
                    <button onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
            </div>
            <button onClick={() => removeFromCart(product.id)} className="text-red-600 bg-gray-200 p-1 rounded-full">
                <i className="fas fa-cart-plus text-strike"></i>
            </button>
            
        </div>
        ))}
        <div className="border-t border-solid border-slate-900 p-4">
        <strong>Total: </strong>${(computeTotalCost() / 100).toFixed(2)}
        <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-500">
    Checkout
</button>
    </div>
        </div>





        </div>
        </motion.div>
        </div>,
        _document.getElementById('portal')
    )
}