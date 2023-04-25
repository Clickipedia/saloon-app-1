import React, { useEffect, useState } from 'react';

import flowerIcon from '../../../assets/all-images/Flower-icon-2.png'

import {RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'

const FAQ = () => {
    return (
        <div className='' >
            <div className='text-center py-40 text-3xl font-bold'>
                <h1>FREQUENT ASK QUESTION</h1>
            </div>
            <div className='w-1/2 mx-auto mb-20 space-y-3'>
                {
                     [...Array(5)].map((v,i)=><FAQcard key={i} num={i+1} />)
                }
            </div>
        </div>
    );
};


export const FAQcard = ({num}) => {

    const [iconToogle, setIconToogle] = useState(true)

    // console.log(num);
    return (
        <div className="collapse mx-auto">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold bg-white text-black flex justify-between items-center"
            onClick={()=>setIconToogle(!iconToogle)}
            >
                 <p>
                {num}. WHAT IS SERVICE INCLUDED?
                 </p>
                 {
                    iconToogle ? <RiArrowDownSLine/> : <RiArrowUpSLine/>
                 }
            </div>
            <div className="collapse-content duration-200">
                <div className='pt-5' >
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                    </p>
                    <ul className='space-y-4 mt-5' >
                        {
                            [...Array(3)].map((v, i) => {
                                return (
                                    <li key={i} className='flex gap-3'>
                                        <img src={flowerIcon} alt="" />    Lightens acne scars and spots caused by Sun Damage
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default FAQ;