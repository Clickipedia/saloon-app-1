import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';

const Cart = ({value}) => {

    const navigation = useNavigation();
    const navigate = useNavigate();


    const handleCheckout = ()=>{
        // navigation.location.pathname
        // alert('ok');
        navigate('/billing-info')
        // navigation('/')
    }


    return (
        <div className=''>
           <div className='text-black'>
           <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Booking Cart</h3>
                    {
                        !value?
                        <p className="py-4">No Package Added</p>
                        : 
                        <div>
                            <p className="py-4">1 Package Added</p>
                            <div className='p-2 space-y-3' >
                                <img className='w-full h-[12rem] bg-black' src="" alt="" />
                                <div className='flex justify-between text-xl font-bold' >
                                    <h1 className='uppercase'>
                                        Demo Title
                                    </h1>
                                    <p className='text-[#d8a62a]' >
                                        $285
                                    </p>
                                </div>
                                <div className='text-sm text-[#868686]' >
                                    <p>Thursday, September 18, 2016 - 09:00AM</p>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn rounded-none border-2 border-[#d8a62a] bg-transparent text-[#d8a62a]">Close</label>

                        <label htmlFor="my-modal-6" onClick={handleCheckout} className="btn rounded-none border-none bg-[#d8a62a] text-white" >proccess checkout</label>
                        
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Cart;