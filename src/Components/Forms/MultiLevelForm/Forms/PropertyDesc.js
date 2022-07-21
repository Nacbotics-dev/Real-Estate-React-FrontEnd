import {useContext} from 'react';
import { StepperContext } from '../../../Context/StepperContext';

function PropertyDesc() {
    const {userData,setUserData} = useContext(StepperContext);

    const handleChange =(e)=>{
        const {name,value} = e.target
        setUserData({...userData,[name]:value});
    }

    return (
        <div className='w-full md:w-4/5'>
            <div className="input-group h-30">
                <textarea onChange={handleChange} maxLength={50} name="Description" id="Description" className="input h-full resize-none focus:ring-[#fdae5c]" ></textarea>
                <label htmlFor="Description" className="input-label">Description</label>
            </div> 

            <div className="input-group h-32">
                <textarea onChange={handleChange} maxLength={500} name="Details" id="Details" className="input h-full resize-none focus:ring-[#fdae5c]" ></textarea>
                <label htmlFor="Details" className="input-label">Details</label>
            </div>
            
        </div>
    );
}

export default PropertyDesc;