import React, { useContext, useState } from 'react';
import { data } from './pakages'

import { TiTick } from 'react-icons/ti';
import { AiOutlineClose } from 'react-icons/ai'


import './Pricing.css'
import { CartTooogle } from '../../../Layout/Main/Main';
import Appointment from '../../appointment/appointment';

const Pricing = () => {


    return (
        <div className='2xl:w-[60%] lg:w-[85%] mx-auto grid grid-cols-4 gap-5'>

            {
                data.map(price => <PriceCard key={price.id} price={price} />)
            }

        </div>
    );
};


const PriceCard = ({ price }) => {

    const handleCart = useContext(CartTooogle);
    const [cartValue , setCartValue] = handleCart

    return (
        <div className='border-2 main-box p-8 tracking-wider'>
            <div className='space-y-3'>

                {price.popular ? <span className='text-[10px] bg-[#d8a62a] p-1'
                > Most Popular </span> :
                    <span className='p-1' ></span>
                }


                <h1 className='text-xl uppercase' ><span className='font-bold block' >{price.title}</span>
                    PACKAGE
                </h1>

                <p className='text-[#d8a62a] text-xl font-medium'>${price.price}</p>

                <span className='block w-8 pb-2 border-b' ></span>
            </div>

            <div className='py-5 space-y-2'>
                {
                    (price.features).map((item, i) => {
                        return (
                            <p key={i} className='text-sm' >
                                {
                                    item.status ? <TiTick className='inline text-[#d8a62a] me-2' /> : <AiOutlineClose className='inline me-2 text-[#848493]' />
                                }
                                {item.name}
                            </p>
                        )
                    })
                }
            </div>

            <label
                htmlFor="my-modal"
                className='btn bg-transparent hover:bg-[#d8a62a] hover:text-white rounded-none text-[#d8a62a] duration-150 border border-[#d8a62a] py-2 w-full'
            >Select
            </label>
        <Appointment/>
        </div>
    )
}






export default Pricing;