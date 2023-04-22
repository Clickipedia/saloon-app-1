import React from 'react';

import Pricing from '../../Services/Pricing/Pricing'

import flower from '../../../../assets/all-images/Flower-icon.png';

const PackageSection = () => {
    return (
        <div className='my-20'>
            <div className='w-[50%] space-y-2 text-[#848493] text-center mx-auto'>
                <p className='text-lg'>Choose Our Makeup Offer</p>
                <h2 className='text-3xl uppercase'><span className='font-semibold'>SPECIAL PRICE</span> PACKAGE</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
            </div>

            <div className='my-10'>
                <Pricing/>
            </div>

        </div>
    );
};

export default PackageSection;