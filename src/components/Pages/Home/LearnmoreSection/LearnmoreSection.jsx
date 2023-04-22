import React from 'react';

const LearnmoreSection = () => {
    return (
        <div className='bg-white pe-40 text-black flex items-center justify-end h-[55vh]' >
            <div className='w-[45%] space-y-8 text-right'>
                <h1 className='text-5xl tracking-wider'>
                    <span className='font-bold' >EVERYTHING HAS</span> BEAUTY
                    <span className='font-bold' > MAKE UP IS</span> ART
                </h1>
                <p className='ps-20 text-[#908f8f]'>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                </p>
                <button className='border border-[#d8a62a] hover:bg-[#d8a62a] hover:text-white text-[#d8a62a] px-16 py-4'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default LearnmoreSection;