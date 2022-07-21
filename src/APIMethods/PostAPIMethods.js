import axiosInstance from "./AxiosBase";



function PostAPIMethods(QUERY_URL,DATA_PARAMS,setRequests) {
    
    setRequests({loading:true,data:null,error:false})
        const Header = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `JWT ${localStorage.getItem['access_token']||localStorage.access_token}`
                
            }}


        axiosInstance.post(QUERY_URL,DATA_PARAMS,Header).then(
            
            response => {
                setRequests({loading:false,data:response.data,error:false})
            }
            ).catch(() =>{
            setRequests({loading:false,data:null,error:true})
        })
}

export default PostAPIMethods;

export function AuthPost(QUERY_URL,DATA_PARAMS) {
    // This handles user login
    const Header = {headers: {'Content-Type': 'application/json'}}//,'withCredentials':false}}

    return(
        axiosInstance.post(QUERY_URL,DATA_PARAMS,Header)
    )
}