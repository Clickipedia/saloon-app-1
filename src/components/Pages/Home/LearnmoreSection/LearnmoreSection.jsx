import React from 'react';

import image from '../../../../assets/all-images/learn-more-image.svg'

const LearnmoreSection = () => {
    return (
        <div className='text-white bg-[#0a0a23] 2xl:h-[65vh] lg:h-[70vh] 2xl:px-40 lg:px-10  relative'>

            <div className='md:relative md:py-0 py-5'>
                <div className='-top-[53px] md:absolute ms-10'>
                    <img className='md:w-[30rem] w-[18rem]' src={image} alt="" />
                </div>

                <div className='md:w-1/2 ms-auto pt-20 px-5'>
                    <h3 className='2xl:text-3xl lg:text-2xl font-light '>BEST BRIDAL MAKEUP ARTIST IN KOLKATA </h3>
                    <h2 className='2xl:text-[4.5rem] lg:text-[3.2rem] font-semibold text-[#D19F68]' >PRIYANKA PAUL</h2>
                    <p className='2xl:text-xl lg:text-lg font-extralight tracking-[.05rem] leading-10 pb-5'
                        style={{
                            fontFamily: "'Open Sans', sans-serif"
                        }}
                    >
                        As one of the best makeup artists in Kolkata, we have the power to create a masterpiece. We also have the power to impact a person’s life in a positive way. We all have the right to feel beautiful and empowered. Feeling beautiful leads to greater confidence. Greater confidence leads to self-respect. Self-respect leads to personal power. Not just for you, but for everyone around you. Beauty can be a powerful thing!
                    </p>
                    <button className='border border-[#d8a62a] hover:bg-[#d8a62a] text-[#d8a62a] hover:text-white font-bold md:px-16 px-6 md:py-4 py-2 uppercase'
                    style={{
                        fontFamily: "'Montserrat', sans-serif"
                    }}
                    >
                        Learn More
                    </button>
                </div>
            </div>




        </div>
    );
};

export default LearnmoreSection;