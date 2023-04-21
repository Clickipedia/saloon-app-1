import React, { useState } from 'react';

import commaIcon from '../../../../assets/all-images/comma-icon.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Detail = () => {




    const servicesData = [
        {
            id: 1,
            title: 'EYE MAKEUP TREATMENT',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm',
            img: ''
        },
        {
            id: 2,
            title: 'HAIR MAKEUP TREATMENT',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm',
            img: ''
        },
    ]

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
            <div className='w-1/2 mx-auto grid grid-cols-2' >
                <div className=''>

                </div>
                <div className='space-y-5 text-[#848493] text-lg'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                    </p>
                    <button className="btn-effect text-[#d8a62a] border-2 border-[#d8a62a] px-12 py-3 font-medium uppercase" >Book Now!</button>
                </div>
            </div>

            {/* <div>
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div> */}

            <div className='my-10 w-full'>
                <h1 className='text-4xl text-center font-light'><span className='font-semibold'>Enjoy Our</span> Other Services</h1>
                <div className='w-[70%] grid grid-cols-2 gap-10 mx-auto my-16'>
                    {
                        servicesData.map(item => {
                            return (
                                <div key={item.id}
                                    className='mx-auto grid grid-cols-2 gap-10 border h-[272px] w-full p-10 items-center'
                                >
                                    <div className='w-full h-full shadow-2xl'>
                                        {/* <img  src="" alt="" /> */}
                                    </div>
                                    <div className='space-y-4'>
                                        <h1 className='text-2xl font-semibold'>{item.title}</h1>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <Carousel responsive={responsive}
                    showDots
                    arrows={false}
                    customDot={<CustomDot/>}
                    >
                        <ClientFeedback/>
                        <ClientFeedback/>
                        <ClientFeedback/>
                    </Carousel>
                </div>
            </div>
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

export default Detail;