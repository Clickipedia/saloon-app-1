
import detailIcon from '../../../assets/all-images/details-icon.png'
import priceIcon from '../../../assets/all-images/price-icon.png'
import photoIcon from '../../../assets/all-images/Photo-icon.png'
import reviewIcon from '../../../assets/all-images/Star-icon.png'
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

import { GrContactInfo } from 'react-icons/gr';

import './Services.css';

import image from '../../../assets/all-images/service-image.jpg'
const Services = () => {


    window.scrollTo(0, 0)


    const [actiiveLink, setActiveLink] = useState(false)



    return (
        <div className='pb-20'>

            <div className=" h-[50vh] bg-cover text-center grid place-items-center bg-black"
            style={{
                backgroundImage:`url(${image})`
            }}
            >
                <div className='all-bg-filter' >
                    <div className=' space-y-5'>
                        <h1 className="text-5xl font-bold" >FACIAL MAKEUP TREATMENT</h1>
                        <p className="text-[#ffffff] w-[60%] mx-auto text-lg " >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ipsum dolor sit amet.</p>
                        <button className="bg-[#d8a62a] border-2 border-[#d8a62a] px-12 py-3 font-medium uppercase btn-effect" >Book Now!</button>
                    </div>
                </div>
            </div>

            <div className='w-[40%] mx-auto'>
                <ul className='flex justify-between items-center'>

                    <li>
                        <NavLink to='/services/detail' className={({ isActive }) => isActive ?
                            `text-white ` : ` text-[#5a5a6f]`} >

                            <button className='hover:border-2 w-40 h-40 rounded-xl text-center uppercase font-medium space-y-3' >
                                <img className='mx-auto w-20 h-20 object-contain p-5 rounded-[50%] border-4 tbg-white' src={detailIcon} alt="" />
                                <p>Detail</p>
                            </button>

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/services/pricing' className={({ isActive }) => isActive ?
                            `text-white` : ` text-[#5a5a6f]`} >
                            <button className='hover:border-2  w-40 h-40 rounded-xl text-center uppercase font-medium space-y-3' >
                                <img className='mx-auto w-20 h-20 object-contain p-5 rounded-[50%] border-4' src={priceIcon} alt="" />
                                <p>Price</p>
                            </button>
                        </NavLink>
                    </li>

                    {/* <li>
                        <NavLink to='/services/photos' className={({isActive})=>isActive?
                        `text-white`:` text-[#5a5a6f]`} >
                        <button className='hover:border-2  w-40 h-40 rounded-xl text-center uppercase font-medium space-y-3' >
                                <img className='mx-auto w-20 h-20 object-contain p-5 rounded-[50%] border-4' src={photoIcon} alt="" />
                                <p>Photos</p>
                            </button>
                        </NavLink>
                    </li> */}

                    <li>
                        <NavLink to='/services/reviews' className={({ isActive }) => isActive ?
                            `text-white` : ` text-[#5a5a6f]`} >
                            <button className='hover:border-2  w-40 h-40 rounded-xl text-center uppercase font-medium space-y-3' >
                                <img className='mx-auto w-20 h-20 object-contain p-5 rounded-[50%] border-4' src={reviewIcon} alt="" />
                                <p>Reviews</p>
                            </button>
                        </NavLink>
                    </li>

                </ul>
            </div>

            <div className='my-10' >
                <Outlet />
            </div>

        </div>
    );
};




export default Services;