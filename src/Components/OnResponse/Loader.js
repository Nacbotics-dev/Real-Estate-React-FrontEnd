import React from "react";
import '../../cooler_loader.css';

export function Loader(){
    return(
        <div className="flex justify-center m-auto">
            <div className="loader"></div>
        </div>
    )
}

export function SpringLoader() {

    return(
        <div className='spring--loader'>
            <span className="loader--dot"></span>
            <span className="loader--dot"></span>
            <span className="loader--dot"></span>
            <span className="loader--dot"></span>
            <span className="loader--dot"></span>
            <span className="loader--dot"></span>
            <span className="loader--dot"></span>
        </div>
    )
    
}
