import React from 'react';

const SignIn = () => {
    return (
        <div>
              <form action="" className='space-y-14 mt-14' >
                    <div className=''>
                        <label htmlFor=""
                            className='block text-sm text-slate-500'
                        >Email</label>
                        <input type="email" name="" id=""
                            className='border-b-2 w-full p-1 outline-none'
                        />
                    </div>
                    <div>
                        <label htmlFor=""
                            className='block text-sm text-slate-500'
                        >Password</label>
                        <input type="password" name="" id=""
                            className='border-b-2 w-full p-1 outline-none'
                        />
                    </div>

                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" name="" id="" />
                            <span>Remember Me</span>
                        </div>
                        <a href="#" className='text-sm btn-link'>Forgot Password?</a>
                    </div>

                    <div className='text-center'>
                        <button 
                        className='btn w-full border-2 rounded-none bg-transparent text-black hover:bg-[#d8a62a] hover:border-[#d8a62a] hover:text-white'
                        >Sign In</button>
                    </div>
                </form>
        </div>
    );
};

export default SignIn;