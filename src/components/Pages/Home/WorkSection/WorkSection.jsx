import React from 'react';

import flower from '../../../../assets/all-images/Flower-icon.png';
import face from '../../../../assets/all-images/face-icon-2.svg';
import hand from '../../../../assets/all-images/hand-icon-2.svg';
import foot from '../../../../assets/all-images/foot-icon-2.svg';


const WorkSection = () => {


    const data = [
        {
            id:1,
            title:'Discover',
            desc:'Search for beauty services you need',
            image:face
        },
        {
            id:2,
            title:'Book',
            desc:'Choose your service and book an appointment directly',
            image:hand
        },
        {
            id:3,
            title:'Enjoy',
            desc:'Sit back and enjoy your unique beauty experience',
            image:foot
        },
    ]



    return (
        <div className='text-[#1A1A38] py-5'>
            <div className='my-10  md:w-[60%] mx-auto'>

                <div className='space-y-2 text-center mx-auto'>
                    <p className='text-lg'>Enjoy Our Services</p>
                    <h2 className='text-3xl uppercase text-[#D8A62A]'><span className='font-semibold text-[#0A0A23]'>How It</span> Works</h2>
                    <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                        <img src={flower} alt="" />
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    </div>
                </div>

                <div className='grid grid-cols-3 mt-8' >

                {
                    data.map((item, i)=><WorkCard key={i} item={item} ></WorkCard>)
                }

                </div>

            </div>
        </div>
    );
};

const WorkCard = ({item}) => {

    return (
        <div className='text-center space-y-3'>
            <img className=' hover:scale-110 duration-200 mx-auto md:w-36 w-20 md:h-36 h-20 object-contain rounded-[50%]' src={item.image} alt="" />
            <h2 className='md:text-3xl text-lg ' > {item.title} </h2>
            <p className='text-[#787880] md:text-base text-xs mx-auto md:w-60' > {item.desc} </p>
        </div>
    )
}

export default WorkSection;