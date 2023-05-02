import React from 'react';

const MyBooking = () => {
    return (
        <div className='min-h-screen py-16'>
            <div className='w-[65%] mx-auto p-10 border'>
                <h1 className='text-xl font-bold uppercase' >My Active Booking</h1>
                <div className='flex justify-between p-8 gap-5'>
                    <img className='bg-white w-40 h-40 flex-shrink-0' src="" alt="" />
                    <div className='space-y-3'>
                        <h1 className='text-xl font-bold uppercase' >Demo Title</h1>
                        <p className='text-sm font-light w-2/3' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor quaerat laborum totam incidunt numquam cumque quis. Delectus dolores pariatur dicta id soluta, labore odio iure! Sed impedit nihil eius?
                        </p>
                        <h4 className='text-sm font-medium' >Thursday, September 18, 2016 | 09:00 AM</h4>
                    </div>
                    <p className='text-3xl  font-semibold text-[#d8a62a]'>
                        $285
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;