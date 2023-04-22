import React from 'react';
import Feedback from '../../Services/Detail/Feedback';

import {BsInstagram} from 'react-icons/bs'

const FeedbackSection = () => {
    return (
        <div>
            <div className='my-10 mb-16'>
                <Feedback />
            </div>
            <div className='flex justify-center bg-[#d8a62a] py-4 gap-3 text-2xl'>
                <button>
                <BsInstagram/>
                </button>
                <p>@MinaBeauty</p>
            </div>
        </div>
    );
};

export default FeedbackSection;