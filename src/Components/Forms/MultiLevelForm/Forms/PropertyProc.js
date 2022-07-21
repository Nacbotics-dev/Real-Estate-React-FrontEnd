import {useContext} from 'react';
import { StepperContext } from '../../../Context/StepperContext';
import AddProperty from '../../../../APIMethods/AddProperty';


function PropertyProc() {
    const {userData,} = useContext(StepperContext);
    delete userData["0"];

    let result = AddProperty(userData)

    return (
        <div className='w-full contents'>
            {result}
        </div>
    );
}

export default PropertyProc;
