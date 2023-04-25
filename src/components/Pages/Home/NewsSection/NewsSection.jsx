import React from 'react';

import flower from '../../../../assets/all-images/Flower-icon.png';

import {AiOutlineArrowRight} from 'react-icons/ai'

const NewsSection = () => {
    return (
        <div className='py-20' >
            <div className='space-y-2 text-[#848493] text-center mx-auto'>
                <p className='text-lg'>Keep in Touch</p>
                <h2 className='text-3xl uppercase'><span className='text-[#ceced1] font-semibold'>OUR LATEST </span> NEWS</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
            </div>

            <div className='grid grid-cols-3 w-[70%] mx-auto gap-12 py-10' >
                <NewsBlogCard/>
                <NewsBlogCard/>
                <NewsBlogCard/>
            </div>


        </div>
    );
};


export const NewsBlogCard = () => {

    return (
        <div className='border'>
            <div className='h-[18rem] bg-[#6c6c6c]'>
                {/* <img src="" alt="" /> */}
            </div>

            <div className='p-5 space-y-4'>
                <p className='text-sm text-[#6c6c6c]' > March 15, 2016 </p>
                <h1 className='text-lg font-semibold'> How to : Classic Lipstick Using With Lisa Eldridge </h1>
                <p className='text-[#ceced1]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <button className='w-full flex justify-between items-center text-lg px-5 py-3 bg-[#d8a62a]'>
                <p>Read More</p>
                <AiOutlineArrowRight className='text-2xl' />
            </button>


        </div>
    )
}



export default NewsSection;