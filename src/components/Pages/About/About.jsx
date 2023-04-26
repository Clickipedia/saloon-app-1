import React, { useState } from 'react';

import Feedback from '../Services/Detail/Feedback';
import './About.css'
import MakeupArtistSection from '../Home/MakeupArtistSection/MakeupArtistSection';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <div className='mb-20'>
            <div className='h-screen grid place-items-center'>

                <h1 className='text-5xl mb-32' > <span className='font-bold' >WE ARE</span> PASSIONATE TEAM</h1>

            </div>
            <div className=' bg-[#1e1e45] 2xl:px-[20rem] lg:px-20 py-20 space-y-10'>

                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                    <br /> <br />
                    Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                    <br /> <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                </p>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >


                </ScrollTrigger>
                    <div className='2xl:w-[85rem] 2xl:-ms-[3.5rem] px-32 py-10 counting-section text-center grid grid-cols-3' >
                        <div>
                            <h1 className='text-4xl font-semibold'>
                                {counterOn && <CountUp start={0} end={3250} duration={1.2} delay={0} />}+
                            </h1>
                            <p>Happy Customers</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>
                                {counterOn && <CountUp start={0} end={1290} duration={1.2} delay={0} />}+
                            </h1>
                            <p>Passionate Makeup Artist</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-semibold'>
                                {counterOn && <CountUp start={0} end={1500} duration={1.2} delay={0} />}+
                            </h1>
                            <p>Clinic Arround The World</p>
                        </div>

                    </div>





                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                    <br /> <br />
                    Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                </p>

            </div>

            <div>
                <MakeupArtistSection />
            </div>
            <div className='py-10 text-center bg-[#d8a62a]'>
                <button className='uppercase btn bg-transparent rounded-none border-white border-2' >
                    contact us today!
                </button>
            </div>
            <div>
                <Feedback />
            </div>

        </div>
    );
};

export default About;