import React from 'react';

import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';

import logo from '../../../assets/all-images/footer-Logo.png'

const Footer = () => {
    return (
        <div className='p-2 md:pt-10 tracking-wider font-light flex flex-col gap-5 items-center justify-center bg-[#1f1f3f]'>
            <img src={logo} alt="" />
            <div className='uppercase md:text-base text-center text-xs space-x-6 footer-links'>
                <a href="/about">about us</a>
                <a href="/contact">contact us</a>
                {/* <a href="/blog">blog</a> */}
                <a href="/services">our services</a>
                <a href="/faq">FAQs</a>
                <a href="/services/pricing">Packages</a>
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