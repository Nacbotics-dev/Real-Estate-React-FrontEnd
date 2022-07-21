import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';


function ProtectedRoutes({redirectPath='/adminLogin',children}) {
    let isAuth = localStorage.getItem('isAuthenticated')
    if (isAuth !== 'true') {
        return(
            <Navigate to={redirectPath} replace />
        )
    }
    return(
        children ? children : <Outlet/>
    )
}

export default ProtectedRoutes;