import React from 'react';
import logo from '../../../assets/all-images/logo.png'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';

const Header = () => {
    return (
        <div className='py-8 px-32'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link to='/' ><img src={logo} alt="" /></Link>
                </div>

                <div className='flex gap-10 items-center'>
                    <Link to='/services' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                    SERVICES
                    </Link>
                    <Link to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                    ABOUT
                    </Link>
                    <Link to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                    CONTACT US
                    </Link>
                    <Link to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                    MY BOOKING
                    </Link>
                    <Link to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                    SALE!
                    </Link>
                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <AiOutlineShoppingCart/>
                    </button>
                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <AiOutlineSearch/>
                    </button>
                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <CgProfile/>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;