import React, { useState } from "react";
import { useTransition } from 'react-spring';
import {NavigationMenu,MobileNavigationMenu} from './NavigationMenu';  

function Navigation(){
    const [showMenu,setShowMenu] = useState(false);
    
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0,transform:'translateY(-100%)' },
        enter: { opacity: 1, transform:'translateY(0%)'},
        leave: { opacity: 0,transform:'translateY(-100%)' },
        reverse: showMenu,
    });

    
    return(
        <div>
            <nav className="bg-gray-800 fixed w-screen z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                            </div>
                            <div className="hidden md:block">
                                <NavigationMenu closMenu ={() => setShowMenu(false)} />
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={()=> setShowMenu(!showMenu)}
                            >
                            <span className="sr-only">Open main menu</span>
                            {!showMenu ?(
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>

                            ):(

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                            </button>
                        </div>
                    </div>
                </div>
    
                <div className="md:hidden" id="mobile-menu">
                    {
                        menuTransitions(
                            (styles, item) => item && 
                            <MobileNavigationMenu closMenu ={() => setShowMenu(false)} styles = {styles} />                            
                        )
                    }

                </div>
            </nav>
        </div>
    )
}

export default Navigation;