import React from 'react';

function OnFailed({error_text}) {
    return (
        <div>
            <div className='w-16 h-64 mx-auto md:w-24 md:h-24'>
                <svg className="w-full h-full" 
                    fill="none" 
                    stroke="red" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className='w-full text-center mt-5'>
                <span className='text-lg font-semibold text-[#ff0000]'>{error_text}</span>
            </div>
        </div>
    );
}

export default OnFailed;