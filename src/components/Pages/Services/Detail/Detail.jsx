import React, { useState } from 'react';
import Feedback from './Feedback';
import { FAQcard } from '../../FAQ/FAQ';

// import commaIcon from '../../../../assets/all-images/comma-icon.png';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


const Detail = () => {




    const servicesData = [
        {
            id: 1,
            title: 'EYE MAKEUP TREATMENT',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm',
            img: 'https://img.freepik.com/free-photo/young-woman-getting-beauty-treatment-her-eyebrows_23-2148910543.jpg?w=1060&t=st=1682487701~exp=1682488301~hmac=22fd243bef9312b1179a847ec26ae15f2a4fed7c5f693de5c5c272d71eec4e79'
        },
        {
            id: 2,
            title: 'HAIR MAKEUP TREATMENT',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm',
            img: 'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20687.jpg?w=1060&t=st=1682487865~exp=1682488465~hmac=281cbf39428b3e9a622804406fba7d241f42210928b50b0569b3f618a5fc71a2'
        },
    ]


    return (
        <div>
            <div className='2xl:w-1/2 lg:w-[80%] mx-auto grid grid-cols-2 gap-10' >
                <div className=''>
                    <img className='object-cover h-full object-[-40px]' src="https://img.freepik.com/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?w=1060&t=st=1682488645~exp=1682489245~hmac=9466a32602fc66e71a4d0f1e8cf4d593f16d4b27c7cd131326d661bc3bf36a05" alt="" />
                </div>
                <div className='space-y-5 text-[#848493] text-lg'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                    </p>
                    <button className="btn-effect text-[#d8a62a] border-2 border-[#d8a62a] px-12 py-3 font-medium uppercase" >Book Now!</button>
                </div>
            </div>

            <div>

                <div className='text-center mt-20 py-10 text-3xl font-bold'>
                    <h1>FREQUENT ASK QUESTION</h1>
                </div>
                <div className='w-1/2 mx-auto mb-20 space-y-3'>
                    {
                        [...Array(5)].map((v, i) => <FAQcard key={i} num={i+1} />)
                    }
                </div>
            </div>

            <div className='my-10 w-full '>
                <h1 className='text-4xl text-center font-light'><span className='font-semibold'>Enjoy Our</span> Other Services</h1>
                <div className='2xl:w-[70%] lg:w-[85%] grid grid-cols-2 gap-10 mx-auto my-16'>
                    {
                        servicesData.map(item => {
                            return (
                                <div key={item.id}
                                    className='mx-auto grid grid-cols-2 gap-10 border h-[272px] w-full p-10 items-center'
                                >
                                    <div className='w-full h-full shadow-2xl'>
                                        <img className='object-cover h-full' src={item.img} alt="" />
                                    </div>
                                    <div className='space-y-4'>
                                        <h1 className='text-2xl font-semibold'>{item.title}</h1>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {/* <Carousel responsive={responsive}
                    showDots
                    arrows={false}
                    customDot={<CustomDot/>}
                    >
                        <ClientFeedback/>
                        <ClientFeedback/>
                        <ClientFeedback/>
                    </Carousel> */}
                    <Feedback />
                </div>
            </div>
        </div>
    );
};



export default Detail;