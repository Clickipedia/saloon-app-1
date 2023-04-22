import React from 'react';
import Feedback from '../../Services/Detail/Feedback';

import { BsInstagram } from 'react-icons/bs'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeedbackSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 10
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 10
        }
    };


    return (
        <div>
            <div className='my-10 mb-16'>
                <Feedback />
            </div>

            <div >
                <Carousel responsive={responsive}
                    infinite
                    sliderClass='feedback-box'
                    autoPlay
                    autoPlaySpeed={1000}
                    rewind
                    showDots
                >
                  <div></div>
                  <div></div>
                  <div></div>

                </Carousel>
            </div>

            <div className='flex justify-center bg-[#d8a62a] py-4 gap-3 text-2xl'>
                <button>
                    <BsInstagram />
                </button>
                <p>@MinaBeauty</p>
            </div>
        </div>
    );
};

export default FeedbackSection;