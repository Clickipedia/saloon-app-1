import React from 'react';

const Cart = () => {
    return (
        <div className=''>
           <div className='text-black'>
           <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Booking Cart</h3>
                    <p className="py-4">No Package Added</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Cart;