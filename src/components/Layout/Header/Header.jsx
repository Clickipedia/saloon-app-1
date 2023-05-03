import React, { useContext, useState } from 'react';
import logo from '../../../assets/all-images/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineChevronDown } from 'react-icons/hi';
import Cart from './Cart/Cart';
import SearchBar from './SearchBar/SearchBar';
import { CartTooogle } from '../Main/Main';
import Appointment from '../../Pages/appointment/appointment';

const Header = () => {


    const [cartValue, setCartValue] = useContext(CartTooogle);

    const [menu, setMenu] = useState(false)


    return (
        <div className='md:py-1 py-2 md:px-32 px-5'>
            <nav className='flex justify-between items-center relative'>
                <div>
                    <Link to='/' >
                        <img className='md:w-40 w-24 md:h-16 object-contain' src={logo} alt="" />
                    </Link>
                </div>

                <div className='md:flex hidden gap-10 items-center'
                    style={{
                        fontFamily: "'Montserrat', sans-serif"
                    }}
                >
                    <NavLink to='/' className={`duration-150 hover:text-[#d8a62a] tracking-wider text-sm ${(({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#d8a62a]" : "")}`} >
                        HOME
                    </NavLink>
                    <NavLink to='/about' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        ABOUT
                    </NavLink>
                    {/* <NavLink to='/services/detail' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        SERVICES
                    </NavLink> */}

                    <div className="dropdown">
                        <label tabIndex={0} className="cursor-pointer flex justify-between items-center gap-1">
                            Service <HiOutlineChevronDown />
                        </label>
                        <ul tabIndex={0} className="dropdown-content border py-1 bg-white uppercase text-center">
                            <li>
                                <NavLink to='' className='px-14 py-1    hover:text-[#d8a62a] ' >Bridal</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='px-7 py-[5px]   hover:text-[#d8a62a] ' >Engagement</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='px-8 py-[5px]   hover:text-[#d8a62a]' >Non-Bridal</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='px-14 py-[5px]   hover:text-[#d8a62a] ' >Fashion</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='px-12 py-[5px]   hover:text-[#d8a62a] ' >Editorial</NavLink>
                            </li>
                            <li>
                                <NavLink to='' className='px-16 py-[5px]   hover:text-[#d8a62a] w-full' >Party</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* <NavLink to='/my-booking' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        MY BOOKING
                    </NavLink> */}

                    {/* <NavLink to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        OFFER!
                    </NavLink> */}

                    <NavLink to='/gallery' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        GALLERY
                    </NavLink>
                    <NavLink to='/contact' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        CONTACT US
                    </NavLink>

                    {/* <button className=' indicator duration-150 hover:text-[#d8a62a] text-2xl'>
                        {
                            !cartValue?'':<span className="indicator-item badge bg-[#d8a62a] font-bold">1</span>
                        }
                        <label htmlFor="my-modal-6" className="cursor-pointer">
                            <AiOutlineShoppingCart />
                        </label>
                    </button> */}

                    <button className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <label htmlFor="my-modal-3" className="cursor-pointer">
                            <AiOutlineSearch />
                        </label>
                    </button>
                    <button className='' >
                        <label htmlFor="my-modal" className={`duration-150 uppercase bg-[#d8a62a] ${/*appointment*/+''}  text-xs px-6 py-3 text-white font-semibold border-2 border-white hover:border-[#d8a62a] hover:bg-transparent hover:text-[#d8a62a] rounded-[4px] cursor-pointer`}>
                            Book Appointment
                        </label>
                    </button>
                    {/* <Link to='/login/signin' className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <CgProfile />
                    </Link> */}
                </div>

                <div className='md:hidden z-20' >
                    <button onClick={() => setMenu(!menu)} className=' text-[#1a1a38] text-2xl'>
                        {
                            menu ? <RxCross1 /> : <BiMenu />
                        }
                    </button>
                    {
                        !menu ? '' :
                            <div className='absolute top-[36px] -left-[20px] bg-[#1a1a38] text-white py-2 w-screen'>
                                <div className='flex flex-col gap-5 px-3' >
                                    <a href="/">Home</a>
                                    <a href="/about">About</a>
                                    <a href="/contact">Contact</a>
                                    <div className="dropdown">
                                        <label tabIndex={0} className="cursor-pointer flex justify-between items-center gap-1">
                                            Service <HiOutlineChevronDown />
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content border py-1 text-black bg-white uppercase text-center">
                                            <li>
                                                <NavLink className='px-14 py-1  border-b-2 border-white hover:border-[#d8a62a] ' >Bridal</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className='px-7 py-[5px] border-b-2 border-white hover:border-[#d8a62a] ' >Engagement</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className='px-8 py-[5px] border-b-2 border-white hover:border-[#d8a62a]' >Non-Bridal</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className='px-14 py-[5px] border-b-2 border-white hover:border-[#d8a62a] ' >Fashion</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className='px-12 py-[5px] border-b-2 border-white hover:border-[#d8a62a] ' >Editorial</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className='px-16 py-[5px] border-b-2 border-white hover:border-[#d8a62a] w-full' >Party</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="/gallery">Gallery</a>
                                    <button className='duration-150 uppercase bg-[#d8a62a] hover:bg-white hover:text-black text-xs px-3 py-2 rounded-sm'>
                                        <label htmlFor="my-modal" className="cursor-pointer">
                                            Book Appointment
                                        </label>
                                    </button>
                                </div>
                            </div>
                    }
                </div>
            </nav>
            {/* <Cart value={cartValue} /> */}
            <SearchBar />
            <Appointment />
        </div>
    );
};

export default Header;