import {useState,useEffect} from "react";
import PostAPIMethods from './PostAPIMethods';
import OnLoad from "../Components/OnResponse/OnLoad";
import OnSuccess from "../Components/OnResponse/OnSuccess";
import OnFailed from "../Components/OnResponse/OnFailed";



function AddProperty(USER_DATA) {
    let PROPERTIES_URL = `/add_property/`
    let content 

    const [request,setRequests] = useState({
        loading:false,
        data:null,
        error:false,
    })

    
    useEffect(() => {
        PostAPIMethods(PROPERTIES_URL,USER_DATA,setRequests)

    },[USER_DATA,PROPERTIES_URL]);
    

    if (request.error) {
        content = <OnFailed error_text={'Adding Property Failed'}/>
    }

    if (request.loading) {
        content = <OnLoad/>
    }

    if (request.data) {
        content = <OnSuccess/>
    }

    return(content)
}

export default AddProperty;