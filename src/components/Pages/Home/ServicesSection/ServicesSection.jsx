import React, { useState } from 'react';

import flower from '../../../../assets/all-images/Flower-icon.png';
import flower2 from '../../../../assets/all-images/Flower-icon-2.png';
import facial from '../../../../assets/all-images/facial-icon.png';
import eye from '../../../../assets/all-images/eye-icon.png';
import hair from '../../../../assets/all-images/hair-icon.png';


const ServicesSection = () => {

    const [serviceData, setServiceData] = useState('FACIAL MAKEUP TREATMENT')


    return (
        <div className='bg-[#1a1a38] py-16'>
            <div className='w-[70%] mx-auto'>
                <div className='space-y-2 text-[#848493] text-center mx-auto'>
                    <p className='text-lg'>We are Makeup Specialist</p>
                    <h2 className='text-3xl uppercase'><span className='font-semibold text-[#ceced1]'>Our Makeup</span> Services</h2>
                    <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                        <img src={flower} alt="" />
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    </div>
                </div>

                <div className='px-10 grid grid-cols-3 my-10' >

                    <button onClick={() => setServiceData('FACIAL MAKEUP TREATMENT')} className='p-5 px-8 flex items-center justify-between border hover:bg-[#d8a62a]'>
                        <img src={facial} alt="" />
                        <div className='text-left'>
                            <h1 className='text-xl'>Facial Makeup</h1>
                            <p className='text-sm ' >Treatment</p>
                        </div>
                    </button>

                    <button onClick={() => setServiceData('Eye MAKEUP TREATMENT')} className='p-5 px-8 flex items-center justify-between border hover:bg-[#d8a62a]'>
                        <img src={eye} alt="" />
                        <div className='text-left'>
                            <h1 className='text-xl'>Eye Makeup</h1>
                            <p className='text-sm ' >Treatment</p>
                        </div>
                    </button>

                    <button onClick={() => setServiceData('Hair MAKEUP TREATMENT')} className='p-5 px-8 flex items-center justify-between border hover:bg-[#d8a62a]'>
                        <img src={hair} alt="" />
                        <div className='text-left'>
                            <h1 className='text-xl'>Hair Makeup</h1>
                            <p className='text-sm' >Treatment</p>
                        </div>
                    </button>

                </div>

                <div>
                    <ServiceCard serviceData={serviceData} />
                </div>

            </div>
        </div>
    );
};


const ServiceCard = ({ serviceData }) => {

    return (

        <div className='grid grid-cols-2 my-10'>
            <div>

            </div>
            <div className='p-5 space-y-5'>
                <h1 className='text-xl font-bold uppercase'>{serviceData}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                </p>
                <ul className='space-y-3 pt-2'>
                    {
                        [...Array(4)].map((v,i) => {
                            // console.log(i);
                            return (
                                <li key={i} className='flex gap-5'>
                                    <img src={flower2} alt="" /> Lightens acne scars and spots caused by Sun Damage
                                </li>
                            )
                        })
                    }
                </ul>
                <button className='border border-[#d8a62a] text-[#d8a62a] hover:bg-[#d8a62a] hover:text-white px-14 py-3 uppercase' >
                    Learn More
                </button>
            </div>
        </div>
    )
}


export default ServicesSection;