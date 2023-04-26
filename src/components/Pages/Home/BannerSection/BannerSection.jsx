import React from 'react';
import Carousel from 'react-multi-carousel';

import imageBanner from '../../../../assets/all-images/banner-iamge.jpg'

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

                className=''
                responsive={responsive}
                showDots
                customDot={<CustomDot />}
                dotListClass='p-10  ms-auto h-10 w-32'
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
            className='grid bg-cover md:bg-center bg-[-40px] grid-cols-2 w-full md:h-[75vh] h-[35vh] items-center md:ps-[8rem] bg-[#0e0c2e]'
            style={{
                backgroundImage: `url(${imageBanner})`
            }}
        >
            <div className=''></div>
            <div className='md:space-y-8'>
                <h4 className='2xl:text-4xl lg:text-2xl font-extralight'>Find and Book</h4>
                <h1 className='2xl:text-6xl lg:text-4xl uppercase font-light' >
                    <span className='text-[#000000] font-semibold '>Beauty services</span> <br />
                    Anywhere, anytime
                </h1>
                <button className='2xl:py-5 lg:py-3 py-1 2xl:px-16 px-2 lg:px-8 border-2 hover:bg-[#d8a62a] hover:border-[#d8a62a] hover:text-white 2xl:text-base lg:text-sm text-xs'>
                    BOOK A SERVICE NOW!
                </button>
            </div>

        </div>
    )
}

const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
            className={`ms-2 2xl:mb-8 md:mb-4 p-[2px] md:w-4 w-2 md:h-4 h-2 border cursor-pointer ${active ? "active bg-[#d8a62a] " : "inactive bg-transparent "}`}
            onClick={() => onClick()}
        >

        </li>
    );
};

export default BannerSection;