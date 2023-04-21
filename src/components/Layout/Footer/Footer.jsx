import React from 'react';

import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

import logo from '../../../assets/all-images/footer-Logo.png'

const Footer = () => {
    return (
        <div className=' pt-10 tracking-wider font-light flex flex-col gap-5 items-center justify-center bg-[#1f1f3f]'>
            <img src={logo} alt="" />
            <div className='uppercase space-x-6'>
                <a href="#">about us</a>
                <a href="#">contact us</a>
                <a href="#">blog</a>
                <a href="#">our services</a>
                <a href="#">FAQs</a>
                <a href="#">Packages</a>
            </div>
            <div className='flex gap-8 text-2xl'>
                <FaFacebookF/>
                <AiOutlineTwitter/>
                <AiOutlineInstagram/>
                <FaLinkedinIn/>
            </div>
            <div className='bg-[#1a1a38] w-full text-center py-3 text-sm'>
                <p>
                Copyright 2016 | ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    );
};

export default Footer;