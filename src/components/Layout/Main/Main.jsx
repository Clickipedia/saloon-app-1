
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import Header2 from '../Header/Header2';

import './Main.css'
import { createContext, useState } from 'react';
import Header2 from '../Header/Header2';
import ScrollButton from '../ScrollButton/ScrollButton';

export const CartTooogle = createContext('cart value!!!');

const Main = () => {

    document.head.title='nei'

    const [cartValue, setCartValue] = useState(0)

    // const handleCart = () => {
    //     console.log('ok');
    //     console.log(cartValue);
    // }

    return (
        <CartTooogle.Provider value={[cartValue, setCartValue]} >
            <div className='text-[#1a1a38] bg-white w-full' >
                {/* <div className='sticky bg-[#1a1a38] z-50 top-0'> */}
                <Header/>
            </div>
                {/* <Header2/> */}
                {/* </div> */}
                <Outlet />
                <ScrollButton/>
                <Footer />
        </CartTooogle.Provider>
    );
};

export default Main;