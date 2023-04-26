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

            <div className=' mx-auto grid md:grid-cols-4 grid-cols-2 2xl:w-[70%] lg:w-[90%] mt-10'>


                {
                    [...Array(4)].map((v,i) => {
                        // console.log(i);
                        return (
                            <div key={i} className='2xl:w-[20rem] lg:w-[15rem] w-[10rem] 2xl:h-[20rem] lg:h-[15rem] h-[10rem] mx-auto main-box mb-20'>
                                <div className='relative mx-auto w-full h-full upper-box bg-slate-300'>
                                    <img className='object-cover w-full h-full' src="https://img.freepik.com/free-photo/smiling-female-owner-hairdresser-salon_329181-1937.jpg?w=360&t=st=1682487350~exp=1682487950~hmac=30ac947130312cee364428a8c12b0c97a60ed46f57a81387c567c9b68f83fdd0" alt="" />
                                    <span className='absolute top-0 bg-black w-full h-full duration-200 opacity-50 hover:opacity-0' ></span>
                                </div>
                                <div className='text-black down-box  bg-white 2xl:py-6 lg:py-3 py-1 md:px-5 px-1 ' >
                                    <div className='flex justify-between'>
                                        <div>
                                            <h1 className='md:text-xl text-[12px] font-bold'>Da Vinci</h1>
                                            <p className='md:text-xs text-[8px] md:mt-1' >Makeup Artist</p>
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