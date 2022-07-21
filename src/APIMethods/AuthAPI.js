// import { useContext } from "react";
import { AuthPost } from "./PostAPIMethods";
// import AuthContext from  "../Components/Context/AuthProvider";

import axiosInstance from "./AxiosBase";
function AuthAPI(PARAMS,revealError,setErrorMsg,setAuthenticated) {
    // const { setAuth } = useContext(AuthContext)
    


    let LOGIN_URL = `/AuthToken/`
   
    const handleSubmit =  async (e)=>{
        e.preventDefault();
        await AuthPost(LOGIN_URL,PARAMS)
        .then(

            response => {
                localStorage.setItem('access_token',response.data['access'])
                localStorage.setItem('refresh_token',response.data['refresh'])
                localStorage.setItem('isAuthenticated',true)
                axiosInstance.defaults.headers['Authorization'] = `JWT ${response.data['access']}`;
                setAuthenticated(true)
            }
        ).catch((error)=>{
            if (error.response === 'undefined') {
                setErrorMsg('No Server Response');
                revealError.current = true;
                
            } else if (error.response?.status === 400){
                setErrorMsg('Wrong Username or Password');
                revealError.current = true;
            }
            else if (error.response?.status === 401){
                setErrorMsg('Access Denied');
                revealError.current = true;
            }else{
                setErrorMsg('Login Failed');
                revealError.current = true;
            }
        })
            
       
    }

    return(handleSubmit)
}

export default AuthAPI;