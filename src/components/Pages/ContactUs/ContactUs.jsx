import React from 'react';


import { MdLocalPhone } from 'react-icons/md';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';

const ContactUs = () => {
    return (
        <div>
            <div className='h-[70vh] flex flex-col justify-center items-center gap-5'>

                <h1 className='text-5xl uppercase' > <span className='font-bold' >contact </span> Us</h1>
                <a href='#' className=''>
                    Make an online appointment or call <span className='font-bold underline' >+1 888 9898</span>
                </a>

            </div>

            <div className='mx-auto my-10 w-[70%] grid grid-cols-2 gap-10 text-white'>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold'>OUR MAIN OFFICE</h1>
                    <div className='flex items-center gap-5'>
                        <MdLocalPhone className='text-2xl' />
                        <p>1307 Dolley madison Blvd #4C, Mc Lean, VS, 22101</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <HiOutlineLocationMarker className='text-2xl text-white' />
                        <p>(999) 555 667 | (999) 544 666</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <HiOutlineMail className='text-2xl text-white' />
                        <p>admin@minabeauty.com</p>
                    </div>

                </div>

                <div className='row-span-2 space-y-8 outline-none' >
                    <h1 className='text-2xl font-semibold'>OUR MAIN SALON</h1>


                    <div
                    className='flex flex-col gap-3'
                    >
                        <label className='text-xs text-slate-400' htmlFor="">Full Name</label>
                        <input className='bg-transparent outline-none  border-b pb-2' type="text" />
                    </div>
                    <div
                    className='flex flex-col gap-3'
                    >
                        <label className='text-xs text-slate-400' htmlFor="">Email Address</label>
                        <input className='bg-transparent pb-2 outline-none  border-b' type="text" />
                    </div>

                    <div
                    className='flex flex-col gap-3'
                    >
                        <caption
                        className='text-left text-xs text-slate-400'
                        >Your Message</caption>
                        <textarea className='bg-transparent border-b outline-none' name="" id="" cols="30" rows="6"></textarea>
                    </div>

                </div>

                <div className='space-y-5'>
                    <h1 className='text-2xl font-semibold'>OUR MAIN SALON</h1>
                    <div className='flex items-center gap-5'>
                        <MdLocalPhone className='text-2xl' />
                        <p>
                            14045 Pegangsan Timur, San Francisco, CA 22200
                        </p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <HiOutlineLocationMarker className='text-2xl text-white' />
                        <p>(1) 555 667 | (1) 544 666</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <HiOutlineMail className='text-2xl text-white' />
                        <p>admin@minabeauty.com</p>
                    </div>

                </div>
                <div></div>
                <div>
                    <button className='btn w-60 rounded-none bg-transparent border-white hover:bg-[#d8a62a]' >Send Message</button>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;