import React from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Photos = () => {

    const images = [
        'https://img.freepik.com/free-photo/female-hairdresser-using-hairbrush-hair-dryer_329181-1929.jpg?w=1060&t=st=1682421191~exp=1682421791~hmac=ffb69c97d77254783a3eb454c3b7fe03f872541622dcad4a5675227f1fe09c14',
        'https://img.freepik.com/free-photo/young-man-barbershop-trimming-hair_1303-26254.jpg?w=1060&t=st=1682421220~exp=1682421820~hmac=b7e3d0c683d68dc904d51587f97eb0020fb1bf4ed7a2f51a073e4c2773c5e48a',
        'https://img.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_1303-20710.jpg?w=1060&t=st=1682421234~exp=1682421834~hmac=4e6c27ca7abfcd8d929007ecfd61ebdff56463dd141a8ff5479d6bb3a3e59a8b',
        'https://img.freepik.com/free-photo/woman-washing-head-hairsalon_1157-27179.jpg?w=1060&t=st=1682421251~exp=1682421851~hmac=5cfba81a6f4c078d9e6c72490aeffc011a0f4b75943dc579aa37bfc4428f2a30',
    ]

    return (
        <div>
            <h1 className='text-center text-3xl font-bold' >Photos</h1>

            {/* <div className='w-[60%] mx-auto mt-20'>
                <PhotoProvider>
                    <div className="grid grid-cols-3">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <img src={item} alt="" />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div> */}
        </div>
    );
};

export default Photos;