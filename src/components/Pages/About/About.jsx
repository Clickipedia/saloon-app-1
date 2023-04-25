import React from 'react';

import Feedback from '../Services/Detail/Feedback';
import './About.css'
import MakeupArtistSection from '../Home/MakeupArtistSection/MakeupArtistSection';


const About = () => {
    return (
        <div className='my-20'>
            <div className='h-[70vh] grid place-items-center'>

                <h1 className='text-5xl' > <span className='font-bold' >WE ARE</span> PASSIONATE TEAM</h1>

            </div>

            <div className=' bg-[#1e1e45] px-[20rem] py-20 space-y-10'>

                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                    <br /> <br />
                    Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                    <br /> <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
                </p>

                <div className='w-[85rem] -ms-[3.5rem] px-32 py-10 counting-section text-center grid grid-cols-3' >
                    <div>
                        <h1 className='text-4xl font-semibold'>3250+</h1>
                        <p>Happy Customers</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>3500+</h1>
                        <p>Passionate Makeup Artist</p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-semibold'>1500+</h1>
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
                <MakeupArtistSection/>
            </div>
            <div className='py-10 text-center bg-[#d8a62a]'>
                <button className='uppercase btn bg-transparent rounded-none border-white border-2' >
                    contact us today!
                </button>
            </div>
            <div>
                <Feedback/>
            </div>

        </div>
    );
};

export default About;