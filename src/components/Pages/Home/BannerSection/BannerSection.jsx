import React from 'react';
import Carousel from 'react-multi-carousel';

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
                customDot={<CustomDot/>}
                dotListClass='p-10  ms-auto h-10 w-32'
              infinite
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
            className='grid grid-cols-2 w-full h-[75vh] items-center ps-[8rem]'
            style={{
                backgroundImage: ``
            }}
        >
            <div className=''></div>
            <div className='space-y-8'>
                <h4 className='text-4xl'>Find and Book</h4>
                <h1 className='text-6xl uppercase' >
                    <span className='text-[#d8a62a] '>Beauty services</span> <br />
                    Anywhere, anytime
                </h1>
                <button className='py-5 px-16 border-2'>
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
            className={`ms-2 2xl:mb-8 md:mb-4 mb-2 p-[2px] w-4 h-4 border cursor-pointer ${active ? "active bg-[#d8a62a] " : "inactive bg-transparent "}`}
            onClick={() => onClick()}
        >

        </li>
    );
};

export default BannerSection;