import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>

            <div className='w-[33rem] bg-white text-black py-10'>
                <h1 className='text-center text-3xl uppercase font-bold' >Welcome to mina
                </h1>

                <div className='flex justify-between my-5 border-b-4 border-[#d8a62a] text-center px-3'>
                    <NavLink to='/login/signin'
                        className={({ isActive }) =>
                             isActive ? "active-login" : "common-links"
                        } >
                        Sign In
                    </NavLink>
                    <NavLink to='/login/signup'
                        className={({ isActive }) =>
                             isActive ? "active-login" : "common-links"
                        } >
                        Register
                    </NavLink>
                </div>

                <div className='px-10'>
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default LoginPage;