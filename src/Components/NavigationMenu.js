import React from "react";
import {Link} from 'react-router-dom';


export function NavigationMenu(props) {
    return(
        <div className="ml-10 flex items-baseline space-x-4">
            <Link onClick={props.closMenu} to='/' className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link onClick={props.closMenu} to='/properties' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Properties</Link>
            <Link  onClick={props.closMenu} to='/contact' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            <Link  onClick={props.closMenu} to='/addNew' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Property</Link>
        </div>
    )
    
}

export function MobileNavigationMenu(props) {
    return(
        <div style={props.styles}className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link onClick={props.closMenu} to='/' className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link onClick={props.closMenu} to='/properties' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Properties</Link>
            <Link  onClick={props.closMenu} to='/contact' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link  onClick={props.closMenu} to='/addNew' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Property</Link>
        </div>

    )
    
}
