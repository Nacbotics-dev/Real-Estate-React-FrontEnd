import React from 'react';
import {Link} from 'react-router-dom';


function OnSuccess(props) {

    function refreshPage(){ 
        window.location.reload(); 
      }

    return (
        <div className='text-center'>
            <div className='w-20 mx-auto md:w-28'>
                <svg  width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>ic_fluent_checkbox_checked_24_filled</title>
                    <desc>Created with Sketch.</desc>
                    <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="#057a55" fillRule="evenodd">
                        <g id="ic_fluent_checkbox_checked_24_filled" fill="#057a55" fillRule="nonzero">
                            <path d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L18,3 Z M16.4696699,7.96966991 L10,14.4393398 L7.53033009,11.9696699 C7.23743687,11.6767767 6.76256313,11.6767767 6.46966991,11.9696699 C6.1767767,12.2625631 6.1767767,12.7374369 6.46966991,13.0303301 L9.46966991,16.0303301 C9.76256313,16.3232233 10.2374369,16.3232233 10.5303301,16.0303301 L17.5303301,9.03033009 C17.8232233,8.73743687 17.8232233,8.26256313 17.5303301,7.96966991 C17.2374369,7.6767767 16.7625631,7.6767767 16.4696699,7.96966991 Z" id="🎨-Color"></path>
                        </g>
                    </g>
                </svg>

            </div>

            <div>
                <h3 className='text-2xl text-green-500 font-semibold uppercase text-center md:text-2xl'>Property Added!</h3>
            </div>

            <div className='my-3'>
                <Link onClick={refreshPage} to='/addNew' className='border-2 bg-green-400 border-green font-medium text-base text-white py-3 px-8 inline-block rounded-full hover:bg-green-500'>
                Add New
                </Link>
            </div>
            
        </div>
    );
}

export default OnSuccess;