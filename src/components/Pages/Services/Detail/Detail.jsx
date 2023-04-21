import React, { useState } from 'react';

import commaIcon from '../../../../assets/all-images/comma-icon.png';


const Detail = () => {

    // const [faqs, setfaqs] = useState([
    //     {
    //         question: 'How many programmers does it take to screw in a lightbulb?',
    //         answer: 'None. We don\'t address hardware issues.',
    //         open: true
    //     },
    //     {
    //         question: 'Who is the most awesome person?',
    //         answer: 'You. The Viewer.',
    //         open: false
    //     },
    //     {
    //         question: 'How many questions does it take to make a successful FAQ Page?',
    //         answer: 'This many.',
    //         open: false
    //     }
    // ]);

    // const toggleFAQ = index => {
    //     setfaqs(faqs.map((faq, i) => {
    //         if (i === index) {
    //             faq.open = !faq.open
    //         } else {
    //             faq.open = false;
    //         }

    //         return faq;
    //     }))
    // }


    const servicesData = [
        {
            id: 1,
            title: 'EYE MAKEUP TREATMENT',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm',
            img: ''
        },
        {
            id: 2,
            title: 'HAIR MAKEUP TREATMENT',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm',
            img: ''
        },
    ]



    return (
        <div>
            <div className='w-1/2 mx-auto grid grid-cols-2' >
                <div className=''>

                </div>
                <div className='space-y-5 text-[#848493] text-lg'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                    </p>
                    <button className="text-[#d8a62a] border-2 border-[#d8a62a] px-12 py-3 font-medium uppercase" >Book Now!</button>
                </div>
            </div>

            {/* <div>
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div> */}

            <div className='my-10 w-full'>
                <h1 className='text-4xl text-center font-light'><span className='font-semibold'>Enjoy Our</span> Other Services</h1>
                <div className='w-[70%] grid grid-cols-2 gap-10 mx-auto my-16'>
                    {
                        servicesData.map(item => {
                            return (
                                <div key={item.id}
                                    className='mx-auto grid grid-cols-2 gap-10 border h-[272px] w-full p-10 items-center'
                                >
                                    <div className='w-full h-full shadow-2xl'>
                                        {/* <img  src="" alt="" /> */}
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
                <div className='my-20 w-[40%] mx-auto space-y-5' >
                    <img className='mx-auto' src={commaIcon} alt="" />
                    <p className='text-lg italic text-center'>
                        “Mina Service is awesome! Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat”
                    </p>
                    <div className='flex items-center gap-5 w-[273px] mx-auto'>
                        <div
                        className='bg-slate-400 w-20 h-20 border-2 rounded-[50%]'
                        ></div>
                        <div>
                            <h3 className='text-lg uppercase'>Cynthia Nelson</h3>
                            <p className='text-sm text-[#848493]' >customer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const FAQ = ({ faq, index, toggleFAQ }) => {

    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default Detail;