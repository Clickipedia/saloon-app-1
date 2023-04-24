import React from 'react';
import logo from '../../../assets/all-images/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Cart from './Cart/Cart';

const Header = () => {
    return (
        <div className='py-8 px-32'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Link to='/' ><img src={logo} alt="" /></Link>
                </div>

                <div className='flex gap-10 items-center'>
                    <Link to='/' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        HOME
                    </Link>
                    <Link to='/services/detail' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        SERVICES
                    </Link>
                    <Link to='/about' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        ABOUT
                    </Link>
                    <Link to='/contact' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        CONTACT US
                    </Link>
                    <Link to='/my-booking' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        MY BOOKING
                    </Link>
                    <Link to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        SALE!
                    </Link>
                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>

                        <label htmlFor="my-modal-6" className="cursor-pointer">
                            <AiOutlineShoppingCart />
                        </label>
                    </button>
                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <AiOutlineSearch />
                    </button>
                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <CgProfile />
                    </button>
                </div>
            </nav>
            <Cart/>
        </div>
    );
};

export default Header;