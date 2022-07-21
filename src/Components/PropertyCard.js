import React from "react";
import { Link } from "react-router-dom";


export function PropertyCard({property}){
    return(
        <div className="m-auto max-w-sm bg-white rounded-[15px] border border-transparent shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/property/${property.property_id}`}>
                <div className="card-zoom">
                    <div className="card-zoom-image" style={{backgroundImage: `url(${property.property_image})`}}></div>

                    {property.deal_type === 'RENT'?
                        <span className="absolute left-0 top-0 my-5 mx-5 py-2 px-5 rounded-full text-white font-medium bg-red-500">For {property.deal_type}</span>
                    :<span className="absolute left-0 top-0 my-5 mx-5 py-2 px-5 rounded-full text-white font-medium bg-[#fdae5c]">For {property.deal_type}</span>
                    }
                    
                </div>
            </Link>

            
            <div className="p-5">
                <Link to={`/property/${property.property_id}`}>
                    <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-700 dark:text-white hover:text-orange-400">{property.title}</h5>
                </Link>
            

                <div className="flex flex-row flex-nowrap my-2 text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 mr-2 items-center" width="9.345" height="13.342" viewBox="0 0 9.345 13.342">
                        <g id="placeholder" transform="translate(-8.203)">
                            <path id="Path_36" data-name="Path 36" d="M22.263,12a1.706,1.706,0,1,0,1.706,1.706A1.708,1.708,0,0,0,22.263,12Zm0,2.924a1.218,1.218,0,1,1,1.218-1.218A1.22,1.22,0,0,1,22.263,14.924Z" transform="translate(-9.344 -9.076)" fill="#919191"/>
                            <path id="Path_37" data-name="Path 37" d="M16.179,1.369a4.672,4.672,0,0,0-6.608,0,5.322,5.322,0,0,0-.44,6.567l3.744,5.406,3.738-5.4A5.324,5.324,0,0,0,16.179,1.369Zm.039,6.29-3.343,4.827L9.527,7.651a4.809,4.809,0,0,1,.389-5.938,4.185,4.185,0,0,1,5.919,0A4.811,4.811,0,0,1,16.218,7.658Z" transform="translate(0 0)" fill="#919191"/>
                        </g>
                    </svg>
                    <p className="mb-3 text-xs text-gray-400">{property.location}</p>
                </div>
                {property.deal_type === 'RENT'?
                <span className="rounded-full text-white font-medium bg-[#00d363] py-[7px] px-[18px]">₦{property.price.toLocaleString()}/month</span>
                : <span className="rounded-full text-white font-medium bg-[#00d363] py-[7px] px-[18px]">From ₦{property.price.toLocaleString()}</span>
                }
            </div>

            <div className="border-t-gray-200 border-t-2 py-5 grid grid-cols-3 gap-y-1 gap-x-1 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">

                <div className="flex w-full justify-center">
                    <img src="imgs/square.svg" alt="" className="max-w-[20px] mr-2" />
                    <p className="text-xs text-slate-700">{property.dimension} Sqft</p>
                </div>

                <div className="flex w-full justify-center">
                    <img src="imgs/bed.svg" alt="" className="max-w-[20px] mr-2" />
                    <p className="text-xs text-slate-700">{property.no_bedrooms} Bed</p>
                </div>

                <div className="flex w-full justify-center">
                    <img src="imgs/bath.svg" alt="" className="max-w-[20px] mr-2" />
                    <p className="text-xs text-slate-700">{property.no_bathrooms} Bath</p>
                </div>
            </div>
        </div>

    )
}

export function FeaturedPropertyCard({property}){
    return(
        <div className="whitespace-normal w-full max-w-xl p-5 bg-white rounded-lg border  shadow-md dark:bg-gray-800 dark:border-gray-700">
            {property.deal_type === 'RENT'?
                <span className="w-1/6 relative -top-8 my-5 mx-5 py-2 px-5 rounded-md text-white font-medium  bg-red-500">For {property.deal_type}</span>
            :<span className="w-1/6 relative -top-8 my-5 mx-5 py-2 px-5 rounded-md text-white font-medium  bg-[#fdae5c]">For {property.deal_type}</span>
            }

            
            <div className=" border-b-gray-200 border-b-2 mb-3">
                <Link to={`/property/${property.property_id}`}>
                    <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-700 dark:text-white hover:text-orange-400">{property.title}</h5>
                </Link>
                

                <div className="flex flex-row flex-nowrap my-2 text-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 mr-2 items-center" width="9.345" height="13.342" viewBox="0 0 9.345 13.342">
                        <g id="placeholder" transform="translate(-8.203)">
                            <path id="Path_36" data-name="Path 36" d="M22.263,12a1.706,1.706,0,1,0,1.706,1.706A1.708,1.708,0,0,0,22.263,12Zm0,2.924a1.218,1.218,0,1,1,1.218-1.218A1.22,1.22,0,0,1,22.263,14.924Z" transform="translate(-9.344 -9.076)" fill="#919191"/>
                            <path id="Path_37" data-name="Path 37" d="M16.179,1.369a4.672,4.672,0,0,0-6.608,0,5.322,5.322,0,0,0-.44,6.567l3.744,5.406,3.738-5.4A5.324,5.324,0,0,0,16.179,1.369Zm.039,6.29-3.343,4.827L9.527,7.651a4.809,4.809,0,0,1,.389-5.938,4.185,4.185,0,0,1,5.919,0A4.811,4.811,0,0,1,16.218,7.658Z" transform="translate(0 0)" fill="#919191"/>
                        </g>
                    </svg>
                    <p className="mb-3 text-xs text-gray-400">{property.location}</p>
                </div>

            </div>

            <div className="mb-5 md:w-4/5 grid grid-cols-3 gap-y-1 gap-x-1 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">

                <div className="flex w-full justify-left">
                    <img src="imgs/square.svg" alt="" className="max-w-[20px] mr-2" />
                    <p className="text-xs text-slate-700">{property.dimension} Sqft</p>
                </div>

                <div className="flex w-full justify-left">
                    <img src="imgs/bed.svg" alt="" className="max-w-[20px] mr-2" />
                    <p className="text-xs text-slate-700">{property.no_bedrooms} Bed</p>
                </div>

                <div className="flex w-full justify-left">
                    <img src="imgs/bath.svg" alt="" className="max-w-[20px] mr-2" />
                    <p className="text-xs text-slate-700">{property.no_bathrooms} Bath</p>
                </div>
            </div>

            <div className=" text-base text-gray-300 mb-5">
                <p>{property.description}</p>
            </div>
            
            <div className="grid r380-col-1 grid-cols-2 gap-3 justify-items-center items-center sm:grid-cols-2 ">
                
                {property.deal_type === 'RENT'?
                <span className="r380-justify-item-center justify-self-start rounded-full text-red-600 text-base md:text-2xl">₦{property.price.toLocaleString()}/month</span>
                : <span className="r380-justify-item-center justify-self-start rounded-full text-red-600 text-base md:text-2xl">From ₦{property.price.toLocaleString()}</span>
                }

                <Link className="r380-justify-item-center justify-self-end" to={`/property/${property.property_id}`}>
                    <span className="w-1/6 py-2 px-5 rounded-full text-[#fdae5c] font-medium  border-orange-300 border-2 hover:text-white hover:bg-orange-600 bg-gradient-to-r hover:border-none hover:from-[#fdae5c] hover:to-[#fd8e5e]">View Details</span>
                </Link>
            </div>
        </div>

    )
}
