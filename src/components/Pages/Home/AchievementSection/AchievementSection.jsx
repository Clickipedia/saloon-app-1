import React, { useState } from 'react';

import logo from '../../../../assets/all-images/logo-2.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const AchievementSection = () => {

    const [counterOn , setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
        <div className='bg-cover bg-white bg-no-repeat ps-40 text-black flex items-center h-[55vh]'
        
        style={{
            // backgroundImage:`url(https://img.freepik.com/free-vector/asian-beauty-banners-design_23-2148739797.jpg?w=1380&t=st=1682409891~exp=1682410491~hmac=0ca45a91d3cb171e536f7b4b6f9235c6cab69df8306411e546d94fa5e077f950)`
        }}

        >
            <div className='w-[45%] space-y-8'>
                <div className='h-[110px] w-[210px] border-b-2 border-[#d8a62a]'>
                    <img className='h-full object-contain' src={logo} alt="" />
                </div>
                <p className='text-[#908f8f]'>
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                </p>
                <div className='flex justify-between'>

                    <div>
                        <h4 className='2xl:text-4xl lg:text-2xl font-bold text-[#d8a62a]' >
                             {counterOn && <CountUp start={0} end={3250} duration={1.2} delay={0} />}+
                        </h4>
                        <h1 className='font-semibold 2xl:text-lg lg:text-xs' >Happy Customers</h1>
                    </div>

                    <div>
                        <h4 className='2xl:text-4xl lg:text-2xl font-bold text-[#d8a62a]' >
                        {counterOn && <CountUp start={0} end={2930} duration={1.2} delay={0} /> }+
                        </h4>
                        <h1 className='font-semibold 2xl:text-lg lg:text-xs' >Passionate Makeup Artist</h1>
                    </div>

                    <div>
                        <h4 className='2xl:text-4xl lg:text-2xl font-bold text-[#d8a62a]' >
                        {counterOn && <CountUp start={0} end={2300} duration={1.2} delay={0} />}+
                        </h4>
                        <h1 className='font-semibold 2xl:text-lg lg:text-xs' >Clinic Arround The World</h1>
                    </div>

                  

                </div>

            </div>
        </div>
        </ScrollTrigger>
    );
};

export default AchievementSection;