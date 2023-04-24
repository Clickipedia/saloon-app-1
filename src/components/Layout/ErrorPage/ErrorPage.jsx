import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    const navigate = useNavigate()

    return (
        <div>
           <div className='bg-[#1a1a38] text-white'>
            <Header/>
            <main className='w-[70%] my-40 mx-auto' >
                <div className='grid grid-cols-3 gap-5 items-center justify-center'>
                    <div className='col-span-2'>
                        <div className='space-y-5'>
                        <p className='text-lg' >Error {error.status}</p>
                        <h1 className='text-6xl font-bold' >Oops! Sorry!</h1>
                        <h4 className='text-5xl font-light' >Page {error.statusText}</h4>
                        <p className='w-2/3 font-light text-[#ceced1]' >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <button className='btn rounded-none bg-transparent border-2 border-white' 
                        onClick={()=>navigate('/')}
                        >
                            BACK TO HOMEPAGE
                        </button>
                        </div>
                    </div>
                    <div className='col-span-1'>

                    </div>
                </div>
            </main>
            <Footer/>
           </div>
        </div>
    );
};

export default ErrorPage;