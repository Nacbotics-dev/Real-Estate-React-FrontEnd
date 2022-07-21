import React from 'react';
import GetLocations from '../../../APIMethods/GetLocations';

function Locations({onChange}) {
    let data
    let result = GetLocations()

    if (result.error) {
        data = <p> Sorry an error occured try again later</p>
    }

    if (result.loading) {
        data = '....'
    }

    if (result.data) {
        data = result.data.map((location,index)=>(
            <option key={index} value={location.location}>{location.location}</option>
        ))
    
    }

    return (
        <select  name='location' id="countries_multiple" onChange={onChange} className="cool-select">
            {onChange ?
                <option>Please Select A Location</option>
            :  ''}
            
            {data}
        </select>
    );
}

export default Locations;