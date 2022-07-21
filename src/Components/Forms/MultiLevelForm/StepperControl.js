import React from 'react';

function StepperControl({handleClick,currentStep,steps}) {
    return (
        <div className='container mx-auto flex justify-around mt-4 mb-8'>
            {/* back button */}
            <button 
            onClick={()=>handleClick('back')}
            className={`w-full max-w-[120px] md:max-w-[200px] py-2 font-semibold uppercase transition duration-200 
            ease-out bg-white border-2 cursor-pointer text-slate-400 px4 text-sm
            rounded-xl border-slate-300 hover:bg-slate-700 hover:text-white 
            ${currentStep === 1? "opacity-50 cursor-not-allowed": ""}`}>
            Back
            </button>

             {/* next button */}
             <button
             onClick={()=>handleClick('next')}
            className='w-full max-w-[120px] md:max-w-[200px] text-sm py-2 font-semibold text-white uppercase transition duration-200 ease-out bg-green-500 cursor-pointer px4 rounded-xl hover:bg-slate-700 hover:text-white'>
            {currentStep === steps.length  ? "Confirm":"Next"}
            </button>
        </div>
    );
}

export default StepperControl;