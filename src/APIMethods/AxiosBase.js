import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = 'https://nacbotics-properties.herokuapp.com/api/v1/';

const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:5000,
    headers:{
        Authorization: localStorage.getItem['access_token']||localStorage.access_token
        ?
            `JWT ${localStorage.getItem['access_token']||localStorage.access_token}`
        :null,
        
        
        'Content-Type': 'application/json',
        accept: 'application/json',
    },

})


axiosInstance.interceptors.response.use(
    (response) => {
        return(response)
    },

    async function (error) {
        const originalRequest = error.config;
        

        if (typeof error.response === 'undefined') {
            alert(
                'A server Error Occured'
            );
        }

        if (
            error.response.status === 401 && 
            originalRequest.url === BASE_URL+'/AuthToken/refresh/') {
                useNavigate('/adminLogin')
        }

        if (
            error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            
            const refreshToken = localStorage.getItem('refresh_token')||localStorage.refresh_token;

            
            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
                //exp date in token is expressed in seconds,while now returns milliseconds:

                const now = Math.ceil(Date.now()/1000);
                
                if (tokenParts.exp > now) {
                    return axiosInstance
                    .post('/AuthToken/refresh/',{refresh:refreshToken})
                    .then((response) =>{
                        let AuthTokens = response.data
                        localStorage.setItem('access_token',AuthTokens['access'])
                        localStorage.setItem('refresh_token',AuthTokens['refresh'])

                        axiosInstance.defaults.headers['Authorization'] = `JWT ${AuthTokens['access']}`;

                        originalRequest.headers['Authorization'] = `JWT ${AuthTokens['access']}`;

                        return(axiosInstance(originalRequest));
                    })
                    .catch((error) =>{
                        console.log(error);
                    })
                    
                } else{
                    console.log('Refresh Token is expired', tokenParts.exp,now);
                    useNavigate('/adminLogin');
                }
            } else {
                console.log('Refresh token not available');
                useNavigate('/adminLogin');
            }
        }

        return(Promise.reject(error))
    }

    
)


export default axiosInstance;