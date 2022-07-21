import {useContext} from 'react';
import { StepperContext } from '../../../Context/StepperContext';
import Locations from '../../APIForms/Locations';
import ToggleButton from '../../ToggleButton/ToggleButton';

function PropertyInfo() {
    const {userData,setUserData} = useContext(StepperContext);

    const handleChange =(e)=>{
        if (e.target.type === 'file') {
            let image = e.target.files[0]
            setUserData({...userData,'property_image':image});

        } else {
            const {name,value} = e.target
            setUserData({...userData,[name]:value});
        }
       
       
    }
    

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-2'>
            
            <div className="input-group h-14">
                <input onChange={handleChange} value={userData['Title']} type="text" id="name" name='Title' required className="input h-full focus:ring-[#fdae5c]" />
                <label htmlFor="Title" className="input-label">Title</label>
            </div>

            <div className='input-group'>
                <label htmlFor='Property image' className="mb-2 font-medium text-[#fdae5c] text-base dark:text-gray-300 input-label-select">Property Image</label>
                <input  onChange={handleChange} accept="image/*" 
                    className="block w-full text-lg text-gray-900 bg-gray-50
                    rounded-lg border border-gray-300 cursor-pointer 
                    dark:text-gray-400 focus:outline-none 
                    dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400" 
                    id="property_image" name='Property image' type="file"></input>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG (MAX. 800x400px).</p>
            </div>

            <div className="input-group">
                <label className="mb-2  font-medium text-[#fdae5c] text-base dark:text-gray-300 input-label-select" htmlFor="location">Location</label>
                <Locations onChange={handleChange}/>
            </div>

            <div className="input-group">
                <label className="mb-2  font-medium text-[#fdae5c] text-base dark:text-gray-300 input-label-select" htmlFor="Property type">Property Type</label>
                <select value={userData['Property type']} onChange={handleChange} name="Property type" id="" className='cool-select h-14'>
                    <option>Please Select A Property Type</option>
                    <option value="House">Housing</option>
                    <option value="Landed">Landed Property</option>
                </select>
            </div>

            <div className="input-group">
                <label className="mb-2  font-medium text-[#fdae5c] text-base dark:text-gray-300 input-label-select" htmlFor="Deal type">Deal Type</label>
                <select value={userData['Deal type']} onChange={handleChange}   name="Deal type" id="" className='cool-select h-14'>
                    <option>Please Select A Deal Type</option>
                    <option value="RENT">Rent</option>
                    <option value="SALE">Sale</option>
                </select>
            </div>

            <div className="input-group h-14">
                <input value={userData['Price']} onChange={handleChange} type="number" id="price" name='Price' required className="input h-full focus:ring-[#fdae5c]" />
                <label htmlFor="Price" className="input-label">Price(₦)</label>
            </div>

            <div className="input-group h-14">
                <input onChange={handleChange} value={userData['Address']} type="text" id="address" name='Address' required className="input h-full focus:ring-[#fdae5c]" />
                <label htmlFor="Address" className="input-label">Address</label>
            </div>

            <div className="flex items-center justify-between h-14">
                <label className="m-0  font-medium bg-[#fdae5c] h-7 text-white px-1 text-sm rounded-md  dark:text-gray-300 " htmlFor="Deal type">Featured</label>
                <ToggleButton setUserData={setUserData} userData={userData}/>
            </div>

        </div>
    );
}

export default PropertyInfo;