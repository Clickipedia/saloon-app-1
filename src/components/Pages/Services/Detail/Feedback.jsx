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
        <div className='' >
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
        <div className='md:my-20 my-10 md:w-[40%] mx-auto space-y-5' >
            <img className='mx-auto md:w-14 w-8' src={commaIcon} alt="" />
            <p className='md:text-lg text-sm italic text-center text-white'>
                “Mina Service is awesome! Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                magna aliquam erat volutpat”
            </p>
            <div className='flex items-center gap-5 w-[273px] mx-auto'>
                <div
                    className=' md:w-20 md:h-20 w-14 h-14  border-2 rounded-[50%] overflow-hidden'
                >
                    <img className='w-full h-full object-cover' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=1060&t=st=1682489210~exp=1682489810~hmac=a493b81be34b3a2d6a44644b5789280cee6a310de485b4cf0efef83966009f63" alt="" />
                </div>
                <div>
                    <h3 className='md:text-lg uppercase text-slate-200'>Cynthia Nelson</h3>
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
            className={`ms-2 2xl:mb-8 md:mb-4 mb-2 p-[2px] md:w-12 w-6 cursor-pointer ${active ? "active bg-[#d8a62a] " : "inactive bg-[#777776] "}`}
            onClick={() => onClick()}
        >

        </li>
    );
};


export default Feedback;