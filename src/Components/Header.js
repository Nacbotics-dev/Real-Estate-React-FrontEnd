import React from "react";
// import Navigation from "./Navigation";
import MyNav from "./MyNav";

function Header(){
    return(
        <header className="w-full bg-[#081f3d] h-20 flex fixed z-50">
            <div className="absolute top-0 bottom-0 flex items-center left-[50%] sm:left-[25%]">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
            </div>
            <MyNav/>
        </header>
    )
}


export default Header;