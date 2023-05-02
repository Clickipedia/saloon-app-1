import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { AiFillStar } from 'react-icons/ai';
const Appointment = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal text-black">
                <div className="modal-box space-y-2">
                    <h3 className="font-bold text-lg">Make an Appoinment</h3>

                    <div className='py-5'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text w-full">Name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text w-full">Email Id</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text w-full">Phone no.</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Select your service</span>
                            </label>
                            <select className="uppercase select select-bordered space-y-3">
                                <option disabled selected>----</option>
                                <option className='p-2  leading-relaxed' >Classic Package</option>
                                <option className='p-2' >TRADITIONAL Package</option>
                                <option className='p-2' >LUXURY Package* </option>
                                <option className='p-2' >COMPLETED Package</option>
                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text w-full">Select Date</span>
                            </label>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full" />
                        </div>

                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" title='Cancel' className="cursor-pointer absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl  "><RxCross1 /></label>
                        <label htmlFor="my-modal" className="btn"
                            onClick={() => setCartValue(1)}
                        >book the appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;