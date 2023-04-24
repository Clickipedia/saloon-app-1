import React from 'react';

import { RxCross1 } from 'react-icons/rx'

const SearchBar = () => {
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle bg-opacity-75">
                <div className="modal-box p-10 py-32 bg-[#0e0c30]">
                    
                    <input type="text" className='bg-[#0e0c30] border-b py-3 outline-none w-full'  placeholder='Type any keyword and enter to search' />


                    <div className="modal-action">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>




           
        </div>
    );
};

export default SearchBar;

{/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
    <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
         <h3 className="text-lg font-bold">Congratulations random Internet user!</h3> 
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> 

        

    </div>
</div> */}