import {useContext} from 'react';
import { StepperContext } from '../../../Context/StepperContext';

function PropertyDim() {
    const {userData,setUserData} = useContext(StepperContext);

    const handleChange =(e)=>{
        const {name,value} = e.target
        setUserData({...userData,[name]:value});
    }


    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-2'>
            <div className="input-group h-14">
                <input onChange={handleChange} type="number"  id="dimension" name='Dimension' required className="input h-full focus:ring-[#fdae5c]" />
                <label htmlFor="Dimension" className="input-label">Dimension(SqFt)</label>
            </div>

            <div className="input-group h-14">
                <input onChange={handleChange} type="number" defaultValue={0}  id="no_bedrooms" name='No bedrooms' required className="input h-full focus:ring-[#fdae5c]" />
                <label htmlFor="No bedrooms" className="input-label">No. Bedrooms</label>
            </div>

            <div className="input-group h-14">
                <input onChange={handleChange} type="number" defaultValue={0} id="No bathrooms" name='No_Bathrooms' required className="input h-full focus:ring-[#fdae5c]" />
                <label htmlFor="No bathrooms" className="input-label">No. Bathrooms</label>
            </div>
        </div>
    );
}

export default PropertyDim;