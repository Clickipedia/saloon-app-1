import React from 'react';

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

import logo from '../../../assets/all-images/logo.svg'

const Footer = () => {
    return (
        <div className=' bg-white md:pt-10 tracking-wider '
            style={{
                fontFamily: "'Montserrat', sans-serif"
            }}
        >
            <div className='grid md:grid-cols-12 grid-cols-1 p-5 gap-5 items-center justify-center text-[#1f1f3f] 2xl:px-52 py-10' >
                <img className='col-span-3 mb-auto w-[15rem]' src={logo} alt="" />
                <div className='uppercase grid grid-cols-1 gap-5 col-span-3'>
                    <a className='hover:translate-x-1 duration-200 ' href="/">Home</a>
                    <a className='hover:translate-x-1 duration-200 ' href="/services/pricing">Packages</a>
                    <a className='hover:translate-x-1 duration-200 ' href="/about">about us</a>
                    <a className='hover:translate-x-1 duration-200 ' href="/contact">contact us</a>
                    {/* <a href="/blog">blog</a> */}
                    <a className='hover:translate-x-1 duration-200 ' href="/services">our services</a>
                </div>

                <div className='uppercase grid mb-auto grid-cols-1 gap-5 col-span-2'>
                    <a className='hover:translate-x-1 duration-200 ' href="">Terms</a>
                    <a className='hover:translate-x-1 duration-200 ' href="">Privacy</a>
                    <a className='hover:translate-x-1 duration-200 ' href="/contact">Policy</a>
                    <a className='hover:translate-x-1 duration-200 ' href="/faq">FAQs</a>
                </div>

               <div className='col-span-4 mb-auto' >
                <div className='gap-3 md:text-right flex'>
                    <input className='border px-5 py-3 rounded-md w-full' type="text" placeholder='Enter your e-mail address' />
                    <button className='px-7 py-3 bg-[#D8A62A] hover:bg-[#be8f15] rounded-md text-white ' >
                        SUBSCRIBE
                    </button>
                </div>
               <div className='flex md:justify-end justify-center gap-8 text-2xl mt-10'>
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <AiOutlineInstagram />
                    <FaLinkedinIn />
                </div>
               </div>
            </div>
            <div className='bg-[#D3D3D7] w-full text-center py-3 text-sm col-span-12'>
                <p>
                    Copyright 2023 | ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    );
};

export default Footer;