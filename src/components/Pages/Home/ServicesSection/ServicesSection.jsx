import React, { useState } from 'react';

import flower from '../../../../assets/all-images/Flower-icon.png';
import bridal from '../../../../assets/all-images/bridal.png';
import engagement from '../../../../assets/all-images/engagement.png';
import nonBridal from '../../../../assets/all-images/non-bridal.png';
import fashion from '../../../../assets/all-images/fashion.png';
import editorial from '../../../../assets/all-images/editorial.png';
import party from '../../../../assets/all-images/party.png';
import makeupData from './data'
import { Link } from 'react-router-dom';


const ServicesSection = () => {

    const [serviceData, setServiceData] = useState(makeupData[0])

    // console.log(makeupData[0]);


    return (
        <div className=' py-16'>
            <div className='2xl:w-[70%] mx-auto'>
                <div className='space-y-2 text-[#848493] text-center mx-auto'>
                    {/* <p className='text-lg'>We are Makeup Specialist</p> */}
                    <h2 className='text-3xl uppercase'><span className='font-semibold text-[#ceced1]'>Our</span> Portfolio</h2>
                    <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                        <img src={flower} alt="" />
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    </div>
                </div>

                <div className='md:px-10 px-5 grid grid-cols-6 my-10' >

                    <button onClick={() => setServiceData(makeupData[0])}  className='mx-auto md:w-[6rem] w-[2.5rem] md:h-[6rem] rounded-[50%] '>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={bridal} alt="" />
                        
                        <div className='mt-2 text-center'>
                            <h1 className='md:text-[16px] text-[10px]'>Bridal</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(makeupData[1])}  className='mx-auto md:w-[6rem] w-[2.5rem] md:h-[6rem] rounded-[50%] '>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={engagement} alt="" />
                        

                        <div className='mt-2 text-center'>
                            <h1 className='md:text-[16px] text-[10px]'>Engagement</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(makeupData[2])}  className='mx-auto md:w-[6rem] w-[2.5rem] md:h-[6rem] rounded-[50%] '>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={nonBridal} alt="" />
                        

                        <div className='mt-2 text-center'>
                            <h1 className='md:text-[16px] text-[10px]'>Non-Bridal</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(makeupData[3])}  className='mx-auto md:w-[6rem] w-[2.5rem] md:h-[6rem] rounded-[50%] '>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={fashion} alt="" />
                        

                        <div className='mt-2 text-center'>
                            <h1 className='md:text-[16px] text-[10px]'>Fashion</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(makeupData[4])}  className='mx-auto md:w-[6rem] w-[2.5rem] md:h-[6rem] rounded-[50%] '>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={editorial} alt="" />
                        

                        <div className='mt-2 text-center'>
                            <h1 className='md:text-[16px] text-[10px]'>Editorial</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(makeupData[5])}  className='mx-auto md:w-[6rem] w-[2.5rem] md:h-[6rem] rounded-[50%] '>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={party} alt="" />
                        

                        <div className='mt-2 text-center'>
                            <h1 className='md:text-[16px] text-[10px]'>Party</h1>
                        </div>
                    </button>



                </div>

                <div className='text-center' >
                    <ServiceCard serviceData={serviceData} />

                </div>

            </div>
        </div>
    );
};


const ServiceCard = ({ serviceData }) => {

    return (
        <div className='my-10' >
            <div className='flex items-center justify-between mt-20 mb-10 '>
                <div className='md:w-96 w-20 h-[2px] bg-[#1A1A38]' ></div>
                <p className='uppercase' >{serviceData.title}</p>
                <div className='md:w-96 w-20 h-[2px] bg-[#1A1A38]' ></div>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-2 md:h-[40rem] overflow-hidden p-5' >

                <div className='md:max-h-[40rem]' >
                    <img className='h-full w-full object-cover' src={serviceData?.images[0]} alt="" />
                </div>

                <div className='grid grid-cols-2 gap-2'>
                    <div className='md:h-[20rem]' >
                        <img className='h-full w-full object-cover' src={serviceData?.images[1]} alt="" />
                    </div>
                    <div className='md:h-[20rem]' >
                        <img className='h-full w-full object-cover' src={serviceData?.images[2]} alt="" />
                    </div>
                    <div className='md:h-[20rem]' >
                        <img className='h-full w-full object-cover' src={serviceData?.images[3]} alt="" />
                    </div>
                    <div className='md:h-[20rem]' >
                        <img className='h-full w-full object-cover' src={serviceData?.images[4]} alt="" />
                    </div>
                </div>

            </div>

            <Link to={{
                pathname:'/gallery',
                state:{
                    data:'serviceData.title'
                }
            }} >
                <button className='border border-[#d8a62a] text-[#d8a62a] hover:bg-[#d8a62a] hover:text-white md:px-8 px-4 md:py-3 py-1 uppercase md:mt-10 font-sans font-semibold' >
                    View All
                </button>
            </Link>

        </div>
    )
}


export default ServicesSection;