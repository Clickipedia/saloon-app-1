import React from 'react';

import flower from '../../../assets/all-images/Flower-icon.png';


const Gallery = () => {

    const images = [
        'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1682421191~exp=1682421791~hmac=ffb69c97d77254783a3eb454c3b7fe03f872541622dcad4a5675227f1fe09c14',
        'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?w=1060&t=st=1682421220~exp=1682421820~hmac=b7e3d0c683d68dc904d51587f97eb0020fb1bf4ed7a2f51a073e4c2773c5e48a',
        'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?w=1060&t=st=1682421234~exp=1682421834~hmac=4e6c27ca7abfcd8d929007ecfd61ebdff56463dd141a8ff5479d6bb3a3e59a8b',
        'https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?w=1060&t=st=1682421251~exp=1682421851~hmac=5cfba81a6f4c078d9e6c72490aeffc011a0f4b75943dc579aa37bfc4428f2a30',
        'https://img.freepik.com/free-photo/handsome-man-shaving-beard-barbershop_1303-26261.jpg?w=1060&t=st=1682426336~exp=1682426936~hmac=97e58f8937305fb5abc5f1925c6faae938013af6cb8f0ab9d4847e8be6ef2679',
        'https://img.freepik.com/free-photo/hairdresser-barber-shop-styling-hair-client_1303-20981.jpg?w=1060&t=st=1682426400~exp=1682427000~hmac=cff60652e651825e0b4fe62af2493f5bd68cdc6daaa07813d9a0560130e00f4c',
        'https://img.freepik.com/free-photo/two-hairstylers-posing-standing-modern-spacy-beaty-salon_651396-986.jpg?w=1060&t=st=1682426414~exp=1682427014~hmac=31aa17297a5ed5d2b41272404a122027afb620d95c3a1e3dba28d1f85a654943',
        'https://img.freepik.com/free-photo/old-fashioned-professional-tattooed-hairdresser-does-haircut-african-american-client-using-trimmer-comb-isolated-dark-textured-background_613910-6437.jpg?w=1060&t=st=1682426442~exp=1682427042~hmac=7bf4b9e831ffaeee0198790d05d5c87868633bf98681c995fda4e2571d60b7ac'
    ]

    return (
        <div className='py-20'>

            <div className='space-y-2 text-[#000000] text-center mx-auto pb-10'>
                <h2 className='text-3xl uppercase'><span className='font-semibold text-[#949494]'>OUR </span>Gallery</h2>
                <div className='py-6 mx-auto flex items-center gap-3 justify-center'>
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                    <img src={flower} alt="" />
                    <div className='bg-[#848493] w-32 h-[2px]' ></div>
                </div>
            </div>


                <div className='grid grid-cols-4 my-120 w-[70%] mx-auto'>
                    {
                        images.map((v, i) => {
                            return (
                                <div key={i} >
                                    <img src={v} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

        </div>
    );
};

export default Gallery;