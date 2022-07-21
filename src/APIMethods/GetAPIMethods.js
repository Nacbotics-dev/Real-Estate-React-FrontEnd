import {useState,useEffect} from "react";
import axiosInstance from "./AxiosBase";


function GetAPIMethods(QUERY_URL) {
    const [request,setRequests] = useState({
        loading:false,
        data:null,
        error:false,
    })

    useEffect(() => {
        setRequests({loading:true,data:null,error:false})

        
        axiosInstance.get(QUERY_URL).then(
            
            response => {
                setRequests({loading:false,data:response.data,error:false})
            }
            ).catch(() =>{
            setRequests({loading:false,data:null,error:true})
            })

    },[QUERY_URL]);
    

    return (request);
}

export default GetAPIMethods;