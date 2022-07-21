import React from 'react';
import { onSubmit } from './util';
import Locations from './APIForms/Locations';
import MultiRangeSlider from './RangeSlider/MultiRangeSlider/MultiRangeSlider'

function FilterForm(props) {
    const handleSubmit = onSubmit((values) => {      
        props.params(values)
      });

    return (
        <form action="#" onSubmit={handleSubmit}>
             <div className='faded-bg grid gap-5 grid-cols-1 md:grid-cols-5 '>

                <div className='w-full mb-5 grid gap-2 md:'>
                    <label className='text-base text-[#fdae5c] font-normal cursor-pointer' htmlFor="Location">Location</label>
                    <Locations/>

                </div>

                <div className='w-full mb-5 grid gap-2 '>
                    <label className='text-base text-[#fdae5c] font-normal cursor-pointer' htmlFor="Property type">Property type</label>
                    <select defaultValue={'Housing'} name="property_type" id="" className='cool-select'>
                        <option value="House">Housing</option>
                        {/* <option value="Warehouse">Warehouse</option> */}
                        <option value="Landed">Landed Property</option>

                    </select>
                </div>

                <div className='w-full mb-5 grid gap-2 '>
                    <label className='text-base text-[#fdae5c] font-normal cursor-pointer' htmlFor="Price ($)">Price (₦)</label>
                    <MultiRangeSlider 
                        min={500000}
                        max={30000000}
                    />
                </div>

                <div className='w-full mb-5 grid gap-2 '>
                    <label className='text-base text-[#fdae5c] font-normal cursor-pointer' htmlFor="Bed Room">Bed Room</label>
                    <select defaultValue={'0'} name="bedroom_no" id="" className='cool-select'>
                        <option value="0">Landed property</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedroom</option>
                        <option value="3">3 Bedroom</option>
                        <option value="4">4 Bedroom</option>
                        <option value="5">5 Bedroom</option>
                        <option value="6">6 Bedroom</option>
                        <option value="7">7 Bedroom</option>
                        <option value="8">8 Bedroom</option>
                        <option value="9">9 Bedroom</option>
                    </select>
                </div>

                <div className='w-full flex justify-center items-end mb-5  '>
                    <button className='flex items-center justify-center w-full rounded-lg bg-[#fdae5c] h-12 md:w-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon h-6 w-6" viewBox="0 0 512 512"><title>Search</title><path fill='white' d="M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z"/></svg>
                    </button>
                </div>
            </div>

        </form>
    );
}

export default FilterForm;