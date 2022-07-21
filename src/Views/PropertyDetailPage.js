import React from "react";
import { useParams } from "react-router-dom";
import {Loader} from "../Components/OnResponse/Loader";
import OnFailed from "../Components/OnResponse/OnFailed";
import { ImageSlider } from "../Components/Carousel";
import GetAPIMethods from "../APIMethods/GetAPIMethods";



function PropertyDetailPage(){

    const { id } = useParams()
    const baseURl = `http://127.0.0.1:8000/api/v1/property/${id}/`;
    
    let content = null
    let propertyInfo = GetAPIMethods(baseURl)

    if (propertyInfo.error) {
        content = <OnFailed error_text={"Sorry An Error Occurred"}/>
    }

    if (propertyInfo.loading) {
        content = <Loader/>
    }

    if (propertyInfo.data) {

        content = 
            <div>
                <div className="grid pt-[160px] pb-[210px] mb:pt[250px]  bg-[#10273c]">

                    <div className="grid m-auto md:grid-cols-2 w-[90%] md:w-[60%] p-2 place-items-center">
                        <div className="w-full h-full grid">
                            <div className="justify-items-start grid gap-y-[4px]">
                                <h2 className="text-white text-3xl font-medium">{propertyInfo.data.title}</h2>
                                <div className="flex flex-row flex-nowrap my-2 text-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mb-3 mr-2 items-center" width="9.345" height="13.342" viewBox="0 0 9.345 13.342">
                                        <g id="placeholder" transform="translate(-8.203)">
                                            <path id="Path_36" data-name="Path 36" d="M22.263,12a1.706,1.706,0,1,0,1.706,1.706A1.708,1.708,0,0,0,22.263,12Zm0,2.924a1.218,1.218,0,1,1,1.218-1.218A1.22,1.22,0,0,1,22.263,14.924Z" transform="translate(-9.344 -9.076)" fill="#919191"/>
                                            <path id="Path_37" data-name="Path 37" d="M16.179,1.369a4.672,4.672,0,0,0-6.608,0,5.322,5.322,0,0,0-.44,6.567l3.744,5.406,3.738-5.4A5.324,5.324,0,0,0,16.179,1.369Zm.039,6.29-3.343,4.827L9.527,7.651a4.809,4.809,0,0,1,.389-5.938,4.185,4.185,0,0,1,5.919,0A4.811,4.811,0,0,1,16.218,7.658Z" transform="translate(0 0)" fill="#919191"/>
                                        </g>
                                    </svg>
                                    <p className="mb-3 text-[#c7c7c7] text-[13px]">{propertyInfo.data.location},{propertyInfo.data.address}</p>
                                </div>

                                <div className="py-5 grid grid-cols-3 gap-y-1 gap-x-1 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">

                                    <div className="grid grid-rows-2 gap-y-3 text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="max-w-[20px] mr-2" width="16.009" height="15.196" viewBox="0 0 16.009 15.196">
                                            <g id="https:_www.flaticon.com_free-icon_3d_1077703" data-name="https://www.flaticon.com/free-icon/3d_1077703" transform="translate(0)">
                                                <path id="Path_38" data-name="Path 38" d="M342.313,346.5a.313.313,0,1,0,.313.313A.313.313,0,0,0,342.313,346.5Zm0,0" transform="translate(-331.306 -335.677)" fill="#001d38"/>
                                                <path id="Path_39" data-name="Path 39" d="M246.625,160.813a.313.313,0,1,0-.313.313A.313.313,0,0,0,246.625,160.813Zm0,0" transform="translate(-238.308 -155.497)" fill="#001d38"/>
                                                <path id="Path_40" data-name="Path 40" d="M150.313,347.121a.313.313,0,1,0-.313-.313A.313.313,0,0,0,150.313,347.121Zm0,0" transform="translate(-145.31 -335.677)" fill="#001d38"/>
                                                <path id="Path_41" data-name="Path 41" d="M15.823,13.43l-1.69-.751V5.816a.314.314,0,0,0-.192-.289L8.317,3.108V.813a.313.313,0,1,0-.625,0v2.3L2.068,5.527a.315.315,0,0,0-.192.289v6.863l-1.69.751A.313.313,0,0,0,.439,14l1.751-.778,5.69,2.447a.318.318,0,0,0,.247,0l5.69-2.447L15.569,14a.313.313,0,0,0,.254-.572ZM7.692,3.789v.776a.313.313,0,1,0,.625,0V3.789l4.712,2.027L8,7.977,2.98,5.816ZM4.145,12.013a.313.313,0,0,0-.413-.159L2.5,12.4V6.29L7.692,8.523v6.386L2.969,12.878l1.018-.452A.313.313,0,0,0,4.145,12.013Zm4.172,2.9V8.523l5.19-2.233V12.4l-1.232-.547a.313.313,0,0,0-.254.572l1.018.452Zm0,0" transform="translate(0.001 -0.5)" fill="#fdae5c"/>
                                            </g>
                                        </svg>

                                        <p className="text-xs font-normal  text-white">{propertyInfo.data.dimension} Sqft</p>
                                    </div>

                                    <div className="grid grid-rows-2 gap-y-3 text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="max-w-[20px] mr-2" width="17.534" height="15.196" viewBox="0 0 17.534 15.196">
                                            <g id="https:_www.flaticon.com_free-icon_bed_895474" data-name="https://www.flaticon.com/free-icon/bed_895474" transform="translate(0)">
                                                <g id="Group_10" data-name="Group 10" transform="translate(0 0)">
                                                <g id="Group_9" data-name="Group 9">
                                                    <path id="Path_52" data-name="Path 52" d="M17.241,40.767h-.292V39.89a1.461,1.461,0,0,0-.877-1.337V34.046a.292.292,0,0,0-.175-.268,1.157,1.157,0,0,0,.175-.609,1.169,1.169,0,1,0-2.338,0,1.157,1.157,0,0,0,.162.584H3.636a1.157,1.157,0,0,0,.162-.584,1.169,1.169,0,1,0-2.338,0,1.157,1.157,0,0,0,.175.609.292.292,0,0,0-.175.268v4.507A1.461,1.461,0,0,0,.584,39.89v.877H.292A.292.292,0,0,0,0,41.059V45.15a.292.292,0,0,0,.292.292H.584V46.9a.292.292,0,0,0,.292.292H2.046a.292.292,0,0,0,.292-.292V45.443H15.2V46.9a.292.292,0,0,0,.292.292h1.169a.292.292,0,0,0,.292-.292V45.443h.292a.292.292,0,0,0,.292-.292V41.059A.292.292,0,0,0,17.241,40.767ZM14.9,32.584a.584.584,0,1,1-.584.584A.584.584,0,0,1,14.9,32.584Zm-12.274,0a.584.584,0,1,1-.584.584A.584.584,0,0,1,2.63,32.584Zm-.584,1.753H15.488v4.091H14.312a1.446,1.446,0,0,0,.3-.877v-.584a1.463,1.463,0,0,0-1.461-1.461H10.812a1.463,1.463,0,0,0-1.461,1.461v.584a1.446,1.446,0,0,0,.3.877H7.883a1.446,1.446,0,0,0,.3-.877v-.584a1.463,1.463,0,0,0-1.461-1.461H4.383a1.463,1.463,0,0,0-1.461,1.461v.584a1.446,1.446,0,0,0,.3.877H2.046Zm11.981,2.63v.584a.877.877,0,0,1-.877.877H10.812a.877.877,0,0,1-.877-.877v-.584a.877.877,0,0,1,.877-.877H13.15A.877.877,0,0,1,14.027,36.968Zm-6.429,0v.584a.877.877,0,0,1-.877.877H4.383a.877.877,0,0,1-.877-.877v-.584a.877.877,0,0,1,.877-.877H6.721A.877.877,0,0,1,7.6,36.968ZM1.169,39.89a.877.877,0,0,1,.877-.877H15.488a.877.877,0,0,1,.877.877v.877H1.169Zm.584,6.721H1.169V45.443h.584Zm14.611,0H15.78V45.443h.584Zm.584-1.753H.584V41.351H16.949Z" transform="translate(0 -32)" fill="#fdae5c"/>
                                                </g>
                                                </g>
                                                <g id="Group_12" data-name="Group 12" transform="translate(1.169 11.689)">
                                                <g id="Group_11" data-name="Group 11">
                                                    <path id="Path_53" data-name="Path 53" d="M33.461,352H32.292a.292.292,0,0,0,0,.584h1.169a.292.292,0,0,0,0-.584Z" transform="translate(-32 -352)" fill="#001d38"/>
                                                </g>
                                                </g>
                                                <g id="Group_14" data-name="Group 14" transform="translate(3.507 11.689)">
                                                <g id="Group_13" data-name="Group 13">
                                                    <path id="Path_54" data-name="Path 54" d="M108.566,352H96.292a.292.292,0,0,0,0,.584h12.274a.292.292,0,0,0,0-.584Z" transform="translate(-96 -352)" fill="#001d38"/>
                                                </g>
                                                </g>
                                            </g>
                                        </svg>
                                        <p className="text-xs font-normal text-white">{propertyInfo.data.no_bedrooms} Bed</p>
                                    </div>

                                    <div className="grid grid-rows-2 gap-y-3 text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="max-w-[20px] mr-2" width="16.281" height="15.196" viewBox="0 0 16.281 15.196">
                                            <g id="https:_www.flaticon.com_free-icon_bathtub_259973" data-name="https://www.flaticon.com/free-icon/bathtub_259973" transform="translate(0)">
                                                <g id="Group_8" data-name="Group 8" transform="translate(0 0)">
                                                <g id="Group_7" data-name="Group 7">
                                                    <path id="Path_42" data-name="Path 42" d="M14.467,24.208H14.2v-5.7a2.432,2.432,0,0,0-2.442-2.442,2.176,2.176,0,0,0-2.162,2.2A1.341,1.341,0,0,0,8.5,19.595a.256.256,0,0,0,.271.271H10.94a.256.256,0,0,0,.271-.271,1.341,1.341,0,0,0-1.074-1.328,1.642,1.642,0,0,1,1.616-1.657,1.888,1.888,0,0,1,1.9,1.9v5.7H5.486a1.341,1.341,0,0,0-1.331-1.085A1.417,1.417,0,0,0,3.07,22.58a1.342,1.342,0,0,0-1.194.733,1.612,1.612,0,0,0-.706-.19A1.341,1.341,0,0,0-.16,24.208H-.186A.8.8,0,0,0-1,25.022a.8.8,0,0,0,.814.814H.14l.732,2.9a1.914,1.914,0,0,0,1.845,1.438h.217l-.353.706a.239.239,0,0,0,.109.353.163.163,0,0,0,.109.027.285.285,0,0,0,.244-.136l.475-.95h7.53l.461.923a.261.261,0,0,0,.244.163c.054,0,.081,0,.109-.054a.286.286,0,0,0,.109-.353l-.34-.68a1.921,1.921,0,0,0,1.778-1.41l.739-2.931h.319a.814.814,0,1,0,0-1.628Zm-3.826-4.884H9.094a.825.825,0,0,1,.787-.543A.79.79,0,0,1,10.641,19.323Zm-9.47,4.342a.912.912,0,0,1,.651.3.246.246,0,0,0,.271.081.263.263,0,0,0,.19-.217.84.84,0,0,1,.814-.706.758.758,0,0,1,.706.407.273.273,0,0,0,.3.136h.081a.79.79,0,0,1,.76.543H.411A.79.79,0,0,1,1.171,23.665ZM12.921,28.6a1.392,1.392,0,0,1-1.33,1.031H2.745A1.392,1.392,0,0,1,1.415,28.6L.71,25.836H13.572Zm1.547-3.311H-.186a.256.256,0,0,1-.271-.271.256.256,0,0,1,.271-.271H14.467a.271.271,0,0,1,0,.543Z" transform="translate(1 -16.067)" fill="#fdae5c"/>
                                                    <path id="Path_43" data-name="Path 43" d="M297.938,153.278a.256.256,0,0,0,.271-.271v-.136a.271.271,0,0,0-.543,0v.136A.256.256,0,0,0,297.938,153.278Z" transform="translate(-288.17 -148.258)" fill="#001d38"/>
                                                    <path id="Path_44" data-name="Path 44" d="M297.938,187.575a.272.272,0,0,0,.271-.271v-.3a.271.271,0,0,0-.543,0v.3A.256.256,0,0,0,297.938,187.575Z" transform="translate(-288.17 -181.307)" fill="#001d38"/>
                                                    <path id="Path_45" data-name="Path 45" d="M297.938,225.812a.256.256,0,0,0,.271-.271v-.136a.271.271,0,1,0-.543,0v.136A.256.256,0,0,0,297.938,225.812Z" transform="translate(-288.17 -218.486)" fill="#001d38"/>
                                                    <path id="Path_46" data-name="Path 46" d="M332.071,153.278a.256.256,0,0,0,.271-.271v-.136a.271.271,0,0,0-.543,0v.136A.256.256,0,0,0,332.071,153.278Z" transform="translate(-321.217 -148.258)" fill="#001d38"/>
                                                    <path id="Path_47" data-name="Path 47" d="M331.8,187.3a.256.256,0,0,0,.271.271.272.272,0,0,0,.271-.271V187a.271.271,0,1,0-.543,0Z" transform="translate(-321.217 -181.306)" fill="#001d38"/>
                                                    <path id="Path_48" data-name="Path 48" d="M331.8,225.54a.271.271,0,1,0,.543,0V225.4a.271.271,0,1,0-.543,0Z" transform="translate(-321.217 -218.485)" fill="#001d38"/>
                                                    <path id="Path_49" data-name="Path 49" d="M366.205,153.278a.256.256,0,0,0,.271-.271v-.136a.271.271,0,1,0-.543,0v.136A.256.256,0,0,0,366.205,153.278Z" transform="translate(-354.266 -148.258)" fill="#001d38"/>
                                                    <path id="Path_50" data-name="Path 50" d="M365.933,187.3a.256.256,0,0,0,.271.271.272.272,0,0,0,.271-.271V187a.271.271,0,1,0-.543,0v.3Z" transform="translate(-354.265 -181.306)" fill="#001d38"/>
                                                    <path id="Path_51" data-name="Path 51" d="M365.933,225.54a.271.271,0,0,0,.543,0V225.4a.271.271,0,0,0-.543,0Z" transform="translate(-354.265 -218.485)" fill="#001d38"/>
                                                </g>
                                                </g>
                                            </g>
                                        </svg>

                                        <p className="text-xs font-normal text-white">{propertyInfo.data.no_bathrooms} Bath</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-full grid w-full">
                            <div className="h-[50px] w-full justify-items-start md:justify-items-end grid gap-y-[4px]">
                                <span className="font-medium text-2xl mb-4 text-[#ff5748] text-right">₦{propertyInfo.data.price.toLocaleString()}</span>
                                <button className="rounded-full max-w-[200px] max-h-[50px] border-2 text-[#fdae5c] hover:text-white hover:bg-[#fdae5c] border-[#fdae5c] font-medium py-2 px-8 text-base ">+10 367 457 735</button>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="w-[90%] md:w-[60%] p-2 m-auto">

                    <div className="mt-[-135px]">
                        <ImageSlider/>
                    </div>

                    <div className="w-full my-[50px] mx-auto md:w-[70%]">
                            <div className="">
                                <h1 className='text-2xl font-medium mb-6'>Description</h1>
                                <p className="text-base text-[#727272] font-normal">{propertyInfo.data.details}</p>
                            </div>
                    </div>
                    

                </div>

            </div>

    }

    return(
            
        <div>
            {content}
        </div>
    )

}

export default PropertyDetailPage;