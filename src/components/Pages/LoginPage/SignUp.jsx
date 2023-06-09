import React, { useState } from 'react';

import {BsFillEyeSlashFill, BsFillEyeFill} from 'react-icons/bs'

const SignUp = () => {


    const [eye, setEye] = useState(false);


    const handleEye =()=>{
        setEye(!eye)
    }

    const handleForm = (e) =>{
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleForm} className='space-y-14 mt-14' >
                    <div className=''>
                        <label htmlFor=""
                            className='block text-sm text-slate-500'
                        >Name</label>
                        <input type="text" name="" id=""
                            className='border-b-2 w-full p-1 outline-none'
                        />
                    </div>
                    <div className=''>
                        <label htmlFor=""
                            className='block text-sm text-slate-500'
                        >Email</label>
                        <input type="email" name="" id=""
                            className='border-b-2 w-full p-1 outline-none'
                        />
                    </div>
                    <div className='relative'>
                        <label htmlFor=""
                            className='block text-sm text-slate-500'
                        >Password</label>
                        <input type={eye?'text':'password'} name="" id=""
                            className=' border-b-2 w-full p-1 outline-none pe-8'
                        />
                          <button onClick={handleEye} className='absolute right-2 top-7'>
                           { eye? <BsFillEyeFill/>  :<BsFillEyeSlashFill/>} 
                        </button>
                    </div>

                    <div className='text-center'>
                        <button 
                        className='btn w-full border-2 rounded-none bg-transparent text-black hover:bg-[#d8a62a] hover:border-[#d8a62a] hover:text-white'
                        >Create Account</button>
                    </div>
                </form>
        </div>
    );
};

export default SignUp;