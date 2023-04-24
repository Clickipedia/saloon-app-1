import React from 'react';

import { RxLinkedinLogo } from 'react-icons/rx';

import flower from '../../../../assets/all-images/Flower-icon.png';

import './MakupArtist.css';

const MakeupArtistSection = () => {
    return (
        <div className='py-20'>
            <div className='space-y-2 text-[#848493] text-center mx-auto'>
                <p className='text-lg'>We Are Passionate</p>
                <h2 className='text-3xl uppercase'><span className='font-semibold text-[#ceced1]'>OUR MAKEUP </span> ARTISTS</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
            </div>

            <div className=' mx-auto grid grid-cols-4 w-[70%] mt-10'>


                {
                    [...Array(4)].map((v,i) => {
                        // console.log(i);
                        return (
                            <div key={i} className='w-[20rem] main-box'>
                                <div className='mx-auto upper-box h-[20rem] bg-slate-300'>
                                    {/* <img src="" alt="" /> */}
                                </div>
                                <div className='text-black down-box bg-white py-6 px-5 ' >
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='text-xl font-bold'>Da Vinci</h1>
                                            <p className='text-xs mt-1' >Makeup Artist</p>
                                        </div>
                                        <button className='text-2xl text-[#d8a62a] hover:text-[#ad851e]'>
                                            <RxLinkedinLogo />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }






            </div>
        </div>
    );
};

export default MakeupArtistSection;