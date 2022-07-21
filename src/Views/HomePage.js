import React, { useState } from 'react';
import {Loader} from "../Components/OnResponse/Loader";
import { isEmpty } from '../Misc/Miscellaneous';
import { PropertyCard } from '../Components/PropertyCard';
import { DataSlider } from '../Components/Carousel';
import FilterForm from '../Components/Forms/FilterForm';
import GetProperties from '../APIMethods/GetPropertiesList';

import OnFailed from '../Components/OnResponse/OnFailed';

function HomePage() {
    let content,loadMore,properties = null
    const [params, setParams] = useState({});

    if (isEmpty(params)) {
        properties = GetProperties()

    } else {
        properties = GetProperties(params)
    }
    
    
    if (properties.error) {
        content = <OnFailed error_text={"Sorry An Error Occurred"}/>
    }

    if (properties.loading) {
        content = <Loader/>
    }

    if (properties.data) {
        
        if (isEmpty(properties.data)) {
            content = ''
        } else {
            content = properties.data.map((property,index)=>(
                <div key={index}>
                    <PropertyCard property={property}/>
                </div>
            ))
        }
        
    }

    if (properties.data) {
        if (isEmpty(properties.data)) {
           
        } else {
            content = <div className='w-full p-5 m-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-4/5 lg:grid-cols-3'>
                        {content}
                 </div>

            loadMore = <div className='flex my-10'>
                        <button className='border-2 m-auto border-[#fdae5c] font-medium text-base text-[#fdae5c] py-3 px-8 inline-block rounded-full bg-gradient-to-r hover:from-[#fdae5c] hover:to-[#fd8e5e]   hover:text-white'>More Properties</button>
                    </div>
        }

        
    }

    return (
        <div className=''>
             <div className="home-banner flex before:bg-[#001d38] justify-center items-center relative  md:h-[850px]" style={{backgroundImage: "url('imgs/home_banner.png')"}}>
                <div className='mt-32 w-[90%] p-[10px] z-10 flex flex-col md:w-4/5 lg:w-1/2'>

                
                    <div className=' text-center'>
                        <h3 className='text-3xl capitalize font-semibold text-white md:text-7xl'>Find Your Best Property</h3>
                        <p className='text-base font-normal text-white mt-3 mb-6 md:text-xl'>Esteem spirit temper too say adieus who direct esteem.</p>
                    </div>

                    <FilterForm params={setParams} />

                </div>

            </div>

            {/* Main Content div bar */}
            <div className='container  m-auto mt-20 md:my-32'>
                <div className='text-center my-10'>
                    <h2 className='text-[#001d38] font-medium text-3xl md:text-[42px]'>Popular Properties</h2>
                </div>
                <div className='w-full flex justify-center flex-wrap'>
                    {content}
                </div>

                {loadMore}
            </div>

            {/* Slider/carousel content div bar */}

            <div  className='py-[140px]  flex  relative ' style={{backgroundImage: "url('imgs/background.png')"}}>
                <div className='m-auto overflow-hidden'>
                    <DataSlider/>
                </div>
            </div>

            {/* Statistic div bar */}
            <div  className=' flex py-10 md:py-36'>
                <div className='grid gap-5 m-auto grid-cols-1 md:grid-cols-3 md:gap-80 '>
                     <div className='grid grid-rows-2 gap-3'>
                        <h3 className='text-[42px] text-[#fdae5c] font-medium'>200 +</h3>
                        <h5 className='text- text-gray-600 font-normal text-sm'>Properties for sale</h5>
                     </div>

                     <div className='grid grid-rows-2 gap-3'>
                        <h3 className='text-[42px] text-[#fdae5c] font-medium'>200 +</h3>
                        <h5 className='text- text-gray-600 font-normal text-sm'>Properties for Rent</h5>
                     </div>

                     <div className='grid grid-rows-2 gap-3'>
                        <h3 className='text-[42px] text-[#fdae5c] font-medium'>200 +</h3>
                        <h5 className='text- text-gray-600 font-normal text-sm'>Properties Sold</h5>
                     </div>
                </div>
            </div>

        </div>
    );
}

export default HomePage;