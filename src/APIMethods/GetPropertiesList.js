import { isEmpty } from "../Misc/Miscellaneous";
import GetAPIMethods from "./GetAPIMethods";

function GetProperties(query_params={}){
    let PROPERTIES_URL
    

    if (isEmpty(query_params)) {
        PROPERTIES_URL = `/properties/`

    } else {
        if (query_params.bedroom_no === 0|| '0') {
            PROPERTIES_URL = `/properties/?location=${query_params.location}&property_type=${query_params.property_type}&min_price=${query_params.minimum_price}&max_price=${query_params.maximum_price}`
            
        } else {
            PROPERTIES_URL = `/properties/?location=${query_params.location}&property_type=${query_params.property_type}&no_bathrooms=${query_params.bedroom_no}&min_price=${query_params.minimum_price}&max_price=${query_params.maximum_price}`
        }
        
    }

    let result = GetAPIMethods(PROPERTIES_URL)
    return(result)

}

export default GetProperties;