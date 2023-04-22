import React from 'react';

import commaIcon from '../../../../assets/all-images/comma-icon.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Feedback = () => {

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
            <Carousel responsive={responsive}
                showDots
                arrows={false}
                customDot={<CustomDot />}
            >
                <ClientFeedback />
                <ClientFeedback />
                <ClientFeedback />
            </Carousel>
        </div>
    );
};


const ClientFeedback = () => {

    return (
        <div className='my-20 w-[40%] mx-auto space-y-5' >
            <img className='mx-auto' src={commaIcon} alt="" />
            <p className='text-lg italic text-center'>
                “Mina Service is awesome! Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat”
            </p>
            <div className='flex items-center gap-5 w-[273px] mx-auto'>
                <div
                    className='bg-slate-400 w-20 h-20 border-2 rounded-[50%]'
                ></div>
                <div>
                    <h3 className='text-lg uppercase'>Cynthia Nelson</h3>
                    <p className='text-sm text-[#848493]' >customer</p>
                </div>
            </div>
        </div>
    )
}



const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
            className={`ms-2 2xl:mb-8 md:mb-4 mb-2 p-[2px] w-12 cursor-pointer ${active ? "active bg-[#d8a62a] " : "inactive bg-[#777776] "}`}
            onClick={() => onClick()}
        >

        </li>
    );
};


export default Feedback;