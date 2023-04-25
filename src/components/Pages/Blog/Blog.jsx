import React from 'react';

import flower from '../../../assets/all-images/Flower-icon.png';
import { NewsBlogCard } from '../Home/NewsSection/NewsSection';

const Blog = () => {
    return (
        <div className='bg-white text-black pb-20' >

            <div className='space-y-2 text-[#848493] text-center mx-auto py-20'>
                <h2 className='text-3xl uppercase'><span className='font-semibold text-[#ceced1]'>OUR LATEST </span> NEWS</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
            </div>

            <div className='grid grid-cols-3 w-[70%] mx-auto gap-12' >
                {
                    [...Array(9)].map((v,i)=><NewsBlogCard key={i} />)
                }
            </div>

        </div>
    );
};

export default Blog;