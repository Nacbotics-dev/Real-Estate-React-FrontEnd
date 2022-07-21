import React from 'react';
import {Loader} from "../Components/OnResponse/Loader";
import { PropertyCard } from '../Components/PropertyCard';
import GetProperties from '../APIMethods/GetPropertiesList';
import OnFailed from '../Components/OnResponse/OnFailed';


function PropertiesPage(props) {
    let content,loadMore = null
    let properties = GetProperties()
    
    if (properties.error) {
        content = <OnFailed error_text={"Sorry Ann Error Occurred"}/>
    }

    if (properties.loading) {
        content = <Loader/>
    }

    if (properties.data) {

        content = properties.data.map((property,index)=>(
            <div key={index}>
                <PropertyCard property={property}/>
            </div>
        ))
    }

    if (properties.data) {

        content = <div className='w-full p-5 m-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-4/5 lg:grid-cols-3'>
                        {content}
                 </div>

        loadMore = <div className='flex my-10'>
                        <button className='border-2 m-auto border-[#fdae5c] font-medium text-base text-[#fdae5c] py-3 px-8 inline-block rounded-full bg-gradient-to-r hover:from-[#fdae5c] hover:to-[#fd8e5e]   hover:text-white'>More Properties</button>
                    </div>
        
    }


    return (
        <div>
            <div className='container  m-auto mt-20 md:my-32'>
                <div className='text-center my-10'>
                    <h2 className='text-[#001d38] font-medium text-3xl md:text-[42px]'>Properties</h2>
                </div>
                <div className='w-full flex justify-center flex-wrap'>
                    {content}
                </div>

                {loadMore}
            </div>
            
        </div>
    );
}

export default PropertiesPage;