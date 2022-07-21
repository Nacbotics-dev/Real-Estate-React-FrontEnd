import GetAPIMethods from "./GetAPIMethods";


function GetLocations(props) {
    let PROPERTIES_URL = '/locations/'
    

    let result = GetAPIMethods(PROPERTIES_URL)
    return(result)
}

export default GetLocations;