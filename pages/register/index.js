import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoggingIn, setIsLoggingIn] = useState(true)

    const {signup} = useAuth()

    async function submitHandler(){
        if(!email || !password){
            setError('Please enter email and password')
            return
        }
    }

    
    return (
        <main>
        <section className='container mx-auto bg-blue-600 m-5 rounded-3xl hover:drop-shadow-xl duration-300 w-2/5 sm:w-4/5 md:4/5 lg:w-1/2 xl:w-1/2 2xl:w-1/3'>
            <h1 className='flex flex-col items-center text-3xl pt-5 select-none text-white'>Register</h1>
            {error && <div className='w-full max-w-[40ch] border-rose-500  text-center  text-rose-400 py-2'>{error}</div>}
            <form>
            <div className='flex flex-col items-center text-2xl m-2 md:w-full'>
                <label className='pt-5 select-none inset-y-0 left-0 text-white'>Email</label>
                <input 
                    type='email' 
                    placeholder='Email address' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className='p-5 rounded-full hover:drop-shadow-xl duration-300 mt-1 bg-white border border-slate-300 placeholder-slate-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500'>
                </input>
                <label className='pt-5 select-none text-white'>Password</label>
                <input 
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password' 
                    className='p-5 rounded-full hover:drop-shadow-xl duration-300 
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 
                    bg-white border border-slate-300 placeholder-slate-400'>
                    </input>
                <button onClick={submitHandler} className='rounded-full bg-black p-4 m-5 mt-7 hover:drop-shadow-xl hover:bg-gray-600 duration-300 text-white w-1/3'>Register</button>
                <p className='text-white'>Already have an account?</p>
               <button className='rounded-full bg-black p-4 mb-5 mt-1 hover:drop-shadow-xl hover:bg-gray-600 duration-300 text-white w-1/3'> <a href='/login'>Login</a></button>
            </div>
            <div>
            </div>
            </form>
        </section>
        </main>
    )
}

export default Register