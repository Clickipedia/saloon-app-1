import React, { useContext } from 'react';
import logo from '../../../assets/all-images/logo.png'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Cart from './Cart/Cart';
import SearchBar from './SearchBar/SearchBar';
import { CartTooogle } from '../Main/Main';

const Header = () => {


    const [cartValue, setCartValue] = useContext(CartTooogle);

    
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
                    <Link to='/about' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        ABOUT
                    </Link>
                    <Link to='/services/detail' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        SERVICES
                    </Link>
                    {/* <Link to='/my-booking' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        MY BOOKING
                    </Link> */}

                    {/* <Link to='' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        OFFER!
                    </Link> */}

                    <Link to='/gallery' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        GALLERY
                    </Link>
                    <Link to='/contact' className='duration-150 hover:text-[#d8a62a] tracking-wider text-sm' >
                        CONTACT US
                    </Link>
                    
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
                    {/* <Link to='/login/signin' className='duration-150 hover:text-[#d8a62a] text-2xl'>
                        <CgProfile />
                    </Link> */}
                </div>
            </nav>
            {/* <Cart value={cartValue} /> */}
            <SearchBar/>
        </div>
    );
};

export default Header;