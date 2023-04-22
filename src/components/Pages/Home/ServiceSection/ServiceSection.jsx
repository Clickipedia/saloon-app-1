import React from 'react';

import flower from '../../../../assets/all-images/Flower-icon.png';
import face from '../../../../assets/all-images/face-icon.png';
import hand from '../../../../assets/all-images/hand-icon.png';
import foot from '../../../../assets/all-images/foot-icon.png';


const ServiceSection = () => {
    return (
        <div className='my-10 w-[60%] mx-auto'>

            <div className='space-y-2 text-[#848493] text-center mx-auto'>
                <p className='text-lg'>Enjoy Our Services</p>
                <h2 className='text-3xl uppercase'><span className='font-semibold'>How It</span> Works</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
            </div>

            <div className='grid grid-cols-3 mt-20' >

                <div className='text-center space-y-3'>
                    <img className='mx-auto border-2 border-[#d8a62a] w-36 h-36 object-contain p-8 rounded-[50%]' src={face} alt="" />
                    <h2 className='text-3xl text-[#bcbcc6]' >1. Discover</h2>
                    <p className='text-[#a9a9b5] mx-auto w-60' >Search for beauty services you need</p>
                </div>

                <div className='text-center space-y-3'>
                    <img className='mx-auto border-2 border-[#d8a62a] w-36 h-36 object-contain p-8 rounded-[50%]' src={hand} alt="" />
                    <h2 className='text-3xl text-[#bcbcc6]' >2. Book</h2>
                    <p className='text-[#a9a9b5] mx-auto w-60' >Choose your service and book an appointment directly</p>
                </div>

                <div className='text-center space-y-3'>
                    <img className='mx-auto border-2 border-[#d8a62a] w-36 h-36 object-contain p-8 rounded-[50%]' src={foot} alt="" />
                    <h2 className='text-3xl text-[#bcbcc6]' >3. Enjoy</h2>
                    <p className='text-[#a9a9b5] mx-auto w-60' >Sit back and enjoy your unique beauty experience</p>
                </div>

            </div>

        </div>
    );
};

export default ServiceSection;