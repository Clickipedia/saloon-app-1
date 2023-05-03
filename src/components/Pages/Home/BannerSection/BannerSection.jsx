import React from 'react';
import Carousel from 'react-multi-carousel';

import imageBanner from '../../../../assets/all-images/banner-bg-image.svg'

import image from '../../../../assets/all-images/banner-image.svg';
import Appointment from '../../appointment/appointment';
const BannerSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div>
            <Carousel

                className='bg-[#1a1a38]'
                responsive={responsive}
                showDots
                customDot={<CustomDot />}
                // dotListClass='p-10  ms-auto h-10 w-32'
                infinite
                removeArrowOnDeviceType={['mobile']}
                autoPlay
            >
                <BannerCarousel />
                <BannerCarousel />
                <BannerCarousel />

            </Carousel>
        </div>
    );
};


const BannerCarousel = () => {

    return (
        <div
            className='grid bg-cover md:bg-center bg-right grid-cols-2 w-full md:h-[92vh] h-[35vh] items-center md:px-[4rem] bg-transparent text-white gap-10'
            style={{
                backgroundImage: `url(${imageBanner})`
            }}
        >

            <div className='md:space-y-5 space-y-2 md:px-0 px-2.5'>

                <h3 className='2xl:text-3xl lg:text-2xl font-light text-[#D19F68]'>MORE THEN 200 CUSTOMERS </h3>
                <h2 className='2xl:text-[4.5rem] lg:text-[3.2rem] font-semibold' >TOP MAKEUP ARTIST</h2>
                <p className='2xl:text-xl lg:text-lg font-extralight tracking-[.05rem] leading-10 pb-5 md:block hidden'
                    style={{
                        fontFamily: "'Open Sans', sans-serif"
                    }}
                >
                    <span className='pe-4'>Wedding makeup</span> ||
                    <span className='px-4'>Party makeup</span> ||
                    <span className='px-4'> Fashion makeup </span> ||
                    <span className='px-4'> Corporate makeup </span> <br className='2xl:block hidden' /> ||
                    <span className='pe-4'> Reception makeup </span> <br className='2xl:hidden' /> ||
                    <span className='px-4'> Pre-wedding makeup </span>
                </p>
                <button>
                    <label htmlFor='my-modal' className='hover:bg-[#D19F68] border border-[#D19F68] text-[#D19F68] hover:text-white uppercase md:px-8 px-3 md:py-3 py-1 rounded-sm tracking-wide md:text-lg text-[10px]'
                        style={{
                            fontFamily: " 'Montserrat', sans-serif"
                        }}
                    >
                        Book Appointment
                    </label>
                </button>

            </div>
            <div className='ms-auto'>
                <img className='2xl:w-[38rem] lg:w-[25rem]' src={image} alt="" />
            </div>
            <Appointment />
        </div>
    )
}

const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
            className={`ms-2 2xl:mb-8 md:mb-4 mb-2 p-[2px] md:w-4 w-2 md:h-4 h-2 border cursor-pointer ${active ? "active bg-[#d8a62a] " : "inactive bg-transparent "}`}
            onClick={() => onClick()}
        >

        </li>
    );
};

export default BannerSection;