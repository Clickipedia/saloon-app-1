import React from 'react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { reviews } from './clientReviews';

const Reviews = () => {
    return (
        <div className='w-[60%] mx-auto'>
            <div className='flex gap-4 flex-col items-center'>
                <div className='flex text-4xl text-[#d8a62a]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <h1 className='text-[#848493] text-lg font-semibold' >133 REVIEWS</h1>
            </div>

            <div className='space-y-10 mt-20' >
                {
                    reviews.map(review => <DisplayReview review={review} key={review.id} />)
                }
            </div>

            <div className='my-16'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-xl font-semibold' >YOUR RATE</h1>
                    <div className='flex text-3xl text-[#d8a62a]'>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                </div>
                <div className='my-10 grid grid-cols-2 gap-10'>
                    <input className='bg-transparent px-10 py-6 border' type="text" placeholder='Full Name' />
                    <input className='bg-transparent px-10 py-6 border' type="text" placeholder='Email' />
                    <textarea className='col-span-2 bg-transparent px-10 py-6 border' name="" id="" cols="30" rows="10"></textarea>
                    <span></span>
                    <input className='ms-auto w-[65%] cursor-pointer hover:bg-[#d8a62a] hover:text-white text-[#d8a62a] py-4 border border-[#d8a62a]' type="submit" placeholder='Submit' />
                    

                </div>
            </div>
        </div>
    );
};



const DisplayReview = ({ review }) => {

    return (
        <div className='flex gap-10 items-center'>
            <div className='w-32 h-28 bg-white rounded-[50%]'>

            </div>

            <div className='space-y-5'>
                <h1 className='text-xl font-bold' >{review.name}
                    <span
                        className='text-sm font-light ms-5 text-[#848493]'
                    >{review.time} ago </span> </h1>
                <div className='flex text-[#d8a62a]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <p className='text-[#848493]' >{review.desc}</p>
                <input className='bg-transparent' type="text" placeholder='Reply' />
            </div>
        </div>
    )
}



export default Reviews;