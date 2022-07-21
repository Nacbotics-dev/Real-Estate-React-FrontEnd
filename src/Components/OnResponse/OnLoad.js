import React from 'react';
import { SpringLoader } from './Loader';

function OnLoad(props) {
    return (
        <div className='my-10'>

            <SpringLoader/>
            <div className='w-full text-center mt-5'>
                <span className='loader--text text-lg font-semibold text-[#fdae5c]'></span>
            </div>
            
        </div>
    );
}

export default OnLoad;