import React from 'react';

import {BsArrowRight} from 'react-icons/bs'

const SubscribeSection = () => {
    return (
        <div className='bg-[#737373] py-[6rem]'>
            <div className='grid grid-cols-2 items-center w-[80%] mx-auto'>
                <div className='space-y-5'>
                    <h1 className='text-2xl font-bold' >SUBSCRIBE OUR NEWSLETTER</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam  nonummy nibh euismod tincidunt ut laoreet</p>
                </div>
                <div className='text-right relative'>
                    <input className='subs-input px-8 py-4 w-[30rem] bg-[#969696] pe-20' type="text" placeholder='Enter your e-mail address' />
                    <BsArrowRight className='absolute right-0 top-0 cursor-pointer duration-200 hover:bg-[#5c5c5c] h-full px-5 w-20' />
                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;