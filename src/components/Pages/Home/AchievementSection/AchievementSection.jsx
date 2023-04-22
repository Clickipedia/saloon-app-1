import React from 'react';

import logo from '../../../../assets/all-images/logo-2.png'

const AchievementSection = () => {
    return (
        <div className='bg-white ps-40 text-black flex items-center h-[55vh]' >
            <div className='w-[45%] space-y-8'>
                <div className='h-[110px] w-[210px] border-b-2 border-[#d8a62a]'>
                    <img className='h-full object-contain' src={logo} alt="" />
                </div>
                <p className='text-[#908f8f]'>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                </p>
                <div className='flex justify-between'>

                    <div>
                        <h4 className='text-4xl font-bold text-[#d8a62a]' >3250+</h4>
                        <h1 className='font-semibold' >Happy Customers</h1>
                    </div>

                    <div>
                        <h4 className='text-4xl font-bold text-[#d8a62a]' >2930+</h4>
                        <h1 className='font-semibold' >Passionate Makeup Artist</h1>
                    </div>

                    <div>
                        <h4 className='text-4xl font-bold text-[#d8a62a]' >2300+</h4>
                        <h1 className='font-semibold' >Clinic Arround The World</h1>
                    </div>

                  

                </div>

            </div>
        </div>
    );
};

export default AchievementSection;