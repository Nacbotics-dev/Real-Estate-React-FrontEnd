import React,{useState} from 'react';
import { Link,useLocation } from 'react-router-dom';

function MyNav(props) {

    const [isActive,setisActive] = useState(true)
    const [CloseNav,setCloseNav] = useState(true)

    //destructuring pathname from location
    const { pathname } = useLocation();
    let currentPath = pathname.split("/");
    
    const setActiveBar = ((e)=>{
        var marker = document.querySelector("#marker");
        marker.style.left = `${e.target.offsetLeft}px`
        marker.style.width = `${e.target.offsetWidth}px`
        setisActive(false)

    })

    const toggleIcon =(()=>{
        var mobNav = document.querySelector("#navBar");
        setCloseNav(!CloseNav)

        if (CloseNav) {
            mobNav.style.top = '0px'
            
        } else {
            mobNav.style.top = '-300px'
        }
    })

    return (
        <>
        <div onClick={toggleIcon} className='z-50 absolute items-center top-0 bottom-0 right-4 flex justify-end w-full sm:hidden'>
            {
                CloseNav ?
            
            <svg 
            className="h-10 w-10" 
            fill="#ffffff" stroke="#ffffff" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            :
            <svg 
                class="h-10 w-10" fill="#ffffff" stroke="#ffffff"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" 
                stroke-width="2" d="M6 18L18 6M6 6l12 12">   
                </path>
            </svg>
            }
        </div>

        <nav id='navBar' className={`bg-[#081f3d] transition_0_5s h-80 top-[-300px] w-full  m-auto pt-9 left-0 right-0 relative sm:absolute sm:top-[-10px] sm:h-full sm:max-w-lg`}>
            <div id='marker' className='hidden transition_0_5s absolute left-0 h-1 w-0 bg-[#fdae5c] bottom-[-8px] rounded md:block'></div>
            <ul className='flex-col text-left mt-10 items-baseline pl-5 flex  list-none justify-around sm:flex-row sm:items-center sm:mt-0 sm:text-center'>

                <Link onClick={setActiveBar} to='/' className={`${currentPath[1] === "" ? "text-white" : "text-gray-300"} ${isActive && currentPath[1] === "" ?'active':''} w-full mb-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700`}>Home</Link>
                <Link onClick={setActiveBar} to='/properties' className={`${currentPath[1] === "properties" ? "text-white" : "text-gray-300"} ${isActive && currentPath[1] === "properties" ?'active':''} w-full  mb-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white`}>Properties</Link>
                <Link onClick={setActiveBar} to='/addNew' className={`${currentPath[1] === "addNew" ? "text-white" : "text-gray-300"} ${isActive && currentPath[1] === "addNew" ?'active':''} w-full  mb-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white`}>Add Property</Link>
                <Link onClick={setActiveBar} to='/contact' className={`${currentPath[1] === "contact" ? "text-white" : "text-gray-300"} ${isActive && currentPath[1] === "contact" ?'active':''} w-full  mb-2 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white`}>Contact</Link>
            
            </ul>
        </nav>
        </>
    );
}

export default MyNav;

