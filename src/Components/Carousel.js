import React from 'react';
import ImageCarousel from './Carousel/ImageCarousel';
import DataCarousel from './Carousel/DataCarousel';
// import useAxiosGet from '../Hooks/ApiRequests';
import {Loader} from './OnResponse/Loader';
import { useParams } from "react-router-dom";
import OnFailed from './OnResponse/OnFailed';

import GetAPIMethods from '../APIMethods/GetAPIMethods';

export function ImageSlider() {
    let slides = []
    const { id } = useParams()
    let featured = null;
    const baseURl = `http://127.0.0.1:8000/api/v1/properties_images/?property=${id}`;

    let products = GetAPIMethods(baseURl)

    if (products.error) {
        featured = <p> Sorry an error occured try again later</p>
    }

    if (products.loading) {
        featured = <Loader/>
    }

    if (products.data) {
        products.data.forEach((product,index)=>(
            slides.push(product.images)
        ))
    }

    return (
        <div>
            {featured ? 
            featured
            :<ImageCarousel slides={slides}/>
            }
        </div>
    );
}

export function DataSlider() {
    let featured = null;
    const baseURl = "http://127.0.0.1:8000/api/v1/properties/?featured=true";

    let featuredProperties = GetAPIMethods(baseURl)

    if (featuredProperties.error) {
        featured = <OnFailed error_text={'Sorry an Erro Occured'}/>
    }

    if (featuredProperties.loading) {
        featured = <Loader/>
    }

    if (featuredProperties.data) {

        featured =  <DataCarousel slides={featuredProperties.data}/>
    }

    return (
        <div>
           
           {featured}
            
        </div>
    );
}
