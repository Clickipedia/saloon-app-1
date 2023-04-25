import React from 'react';
import Feedback from '../../Services/Detail/Feedback';

import { BsInstagram } from 'react-icons/bs'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeedbackSection = () => {


    const img1 = 'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1682402080~exp=1682402680~hmac=0bad94ce069aac073f966753ca1fb4ecfea90b78df21adb67d7190513549672e';


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div>
            <div className='my-10 mb-16'>
                <Feedback />
            </div>
            {/* {
                    [...Array(15)].map((v, i) => <ImageCarousel img={img1} />)
                } */}

            <div>
                <Carousel responsive={responsive}
                autoPlay
                arrows={false}
                autoPlaySpeed={10000}
                // additionalTransfrom={1000}
                infinite
                // rewind
                // rewindWithAnimation
                // pauseOnHover
                // keyBoardControl={true}
                
                customTransition="all 10s linear 0s"
                // transitionDuration={1000}
                
                >
               {
                 [...Array(15)].map((v, i) => <ImageCarousel img={img1} />)
               }
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

const ImageCarousel = ({ img }) => {

    return (
        <div className="">
            <img className='object-cover' src={img} alt="Burger" />
        </div>
    )
}

export default FeedbackSection;