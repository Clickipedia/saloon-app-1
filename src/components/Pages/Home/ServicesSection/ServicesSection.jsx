import React, { useState } from 'react';

import flower from '../../../../assets/all-images/Flower-icon.png';
import flower2 from '../../../../assets/all-images/Flower-icon-2.png';
import facial from '../../../../assets/all-images/facial-icon.png';
import eye from '../../../../assets/all-images/eye-icon.png';
import hair from '../../../../assets/all-images/hair-icon.png';


const ServicesSection = () => {

    const img1 = 'https://img.freepik.com/free-photo/hairstylist-looking-client-mirror_23-2148242870.jpg?w=1060&t=st=1682487588~exp=1682488188~hmac=171e25a8bd0a710952ff745ee20c758a59ca082c69b63563d5739be0511e9bf1'
    const img2 = 'https://img.freepik.com/free-photo/young-woman-getting-beauty-treatment-her-eyebrows_23-2148910543.jpg?w=1060&t=st=1682487701~exp=1682488301~hmac=22fd243bef9312b1179a847ec26ae15f2a4fed7c5f693de5c5c272d71eec4e79'
    const img3 = 'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20687.jpg?w=1060&t=st=1682487865~exp=1682488465~hmac=281cbf39428b3e9a622804406fba7d241f42210928b50b0569b3f618a5fc71a2'

    const [serviceData, setServiceData] = useState([
        'FACIAL MAKEUP TREATMENT', img1
    ])

    // console.log(serviceData);


    return (
        <div className=' py-16'>
            <div className='2xl:w-[70%] mx-auto'>
                <div className='space-y-2 text-[#848493] text-center mx-auto'>
                    {/* <p className='text-lg'>We are Makeup Specialist</p> */}
                    <h2 className='text-3xl uppercase'><span className='font-semibold text-[#ceced1]'>Our</span> Portfolio</h2>
                    <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                        <img src={flower} alt="" />
                        <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    </div>
                </div>

                <div className='md:px-10 px-5 grid grid-cols-6 my-10' >

                    <button onClick={() => setServiceData(['BRIDAL MAKEUP', img1])} className=''>
                        <div className='mx-auto w-[6rem] h-[6rem] rounded-[50%] overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={'https://1.bp.blogspot.com/-K2OTtt4vUHA/YDIDbFBT6TI/AAAAAAAAh-0/2J6DGn-OZ-gOz8yWhui2cIdas99opxzzgCLcBGAsYHQ/s1080/Cute%2Band%2BBeautiful%2BBridal%2BMakeup%2Band%2BDress%2BDP%2BIdeas%2Bfor%2BGirls%2B2021.jpg'} alt="" />
                        </div>
                        <div className='mt-2 text-center'>
                            <h1 className='text-[16px]'>Bridal Makeup</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(['ENGAGEMENT MAKEUP', img2])} className=''>
                        <div className='mx-auto w-[6rem] h-[6rem] rounded-[50%] overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={'https://images.news18.com/ibnlive/uploads/2022/06/untitled-design-6-38-16558797104x3.png'} alt="" />
                        </div>

                        <div className='mt-2 text-center'>
                            <h1 className='text-[16px]'>Engagement Makeup</h1>
                        </div>
                    </button>

                    <button onClick={() => setServiceData(['NON-BRIDAL MAKEUP', img3])} className=''>
                        <div className='mx-auto w-[6rem] h-[6rem] rounded-[50%] overflow-hidden'>
                            <img className='h-full w-full object-cover hover:scale-110 duration-300   mx-auto' src={'https://i.pinimg.com/736x/fb/77/a6/fb77a670ed75d8f5a115e641f1cb07f3.jpg'} alt="" />
                        </div>

                        <div className='mt-2 text-center'>
                            <h1 className='text-[16px]'>NON-BRIDAL Makeup</h1>
                        </div>
                    </button>



                </div>

                <div>
                    <ServiceCard serviceData={serviceData} />
                </div>

            </div>
        </div>
    );
};


const ServiceCard = ({ serviceData }) => {

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='w-96 h-[2px] bg-[#1A1A38]' ></div>
                <p>{serviceData[0]}</p>
                <div className='w-96 h-[2px] bg-[#1A1A38]' ></div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 my-10 px-10'>
                <div>
                    <img className='object-cover' src={serviceData[1]} alt="" />
                </div>
                <div className=' space-y-5'>
                    <h1 className='text-xl font-bold uppercase'>{serviceData[0]}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.
                    </p>
                    <ul className='space-y-3 pt-2'>
                        {
                            [...Array(4)].map((v, i) => {
                                // console.log(i);
                                return (
                                    <li key={i} className='flex gap-5'>
                                        <img className='object-contain' src={flower2} alt="" /> Lightens acne scars and spots caused by Sun Damage
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className='border border-[#d8a62a] text-[#d8a62a] hover:bg-[#d8a62a] hover:text-white px-14 py-3 uppercase' >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ServicesSection;