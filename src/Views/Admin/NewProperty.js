import React, { useState } from 'react';
import Stepper from '../../Components/Forms/MultiLevelForm/Stepper';
import StepperControl from '../../Components/Forms/MultiLevelForm/StepperControl';
import PropertyInfo from '../../Components/Forms/MultiLevelForm/Forms/PropertyInfo';
import PropertyDim from '../../Components/Forms/MultiLevelForm/Forms/PropertyDim';
import PropertyDesc from '../../Components/Forms/MultiLevelForm/Forms/PropertyDesc';
import PropertyPrev from '../../Components/Forms/MultiLevelForm/Forms/PropertyPrev';
import PropertyProc from '../../Components/Forms/MultiLevelForm/Forms/PropertyProc';
import { StepperContext } from '../../Components/Context/StepperContext';


function NewProperty() {
    const [currentStep, setcurrentStep] = useState(1);
    const [userData,setUserData] = useState(" ");
    const [finalData,setFinalData] = useState([]);

    const steps = [
        "Property Information",
        'Property Dimensions',
        'Property Description',
        'Upload Property Preview',
        'Processing'
    ]

    const displayStep = (step) =>{
        switch (step) {
            case 1:
                return <PropertyInfo />
            case 2:
                return <PropertyDim />
            case 3:
                return <PropertyDesc />
            case 4:
                return <PropertyPrev />
            case 5:
                return <PropertyProc />
            default:
                break;
        }
    }


    const isFormValid = ()=>{
        let validInput = []
        const formElem = document.querySelector('form')
        const inputElements = formElem.querySelectorAll('input, select, checkbox, textarea')

        inputElements.forEach((input,inputID)=>{
            let values = input.value
            if (values.includes('Please Select A') || values === '') {
                input.classList.add('invalid-input')
                let previewInput = document.getElementById('MultipleFile')
                if (previewInput === undefined || previewInput === null) {
                }else{
                    previewInput.classList.add('invalid-input')
                }
                
            }else{
                validInput.push(values)

            }
        })

        if (inputElements.length !== validInput.length) {
            return(true)
        } else {
            return(true)
        }
    }

    const handleClick = (direction)=>{
        let newStep = currentStep;
        let formvalid = isFormValid()

        if (direction === 'next' && formvalid !==false) {
            newStep++
        } else if (direction !== 'next') {
            newStep--;
        }else{

        }

        //Check if steps are within bounds

        newStep > 0 && newStep <= steps.length && setcurrentStep(newStep);
    }

    return (
        <div className='pb-2 mx-auto my-36 bg-gray-100 shadow-xl lg:w-1/2 rounded-2xl'>

            {/* Stepper */}
            <div className='container mx-auto mt-5 horizontal'>
                <Stepper steps={steps} currentStep={currentStep}/>

                <div className='text-center mt-8 text-lg font-semibold text-gray-400 sm:hidden'>
                    {steps[currentStep-1]}
                </div>

                {/* Display Components */}
                <div>
                    <StepperContext.Provider value={{
                        userData,
                        setUserData,
                        finalData,
                        setFinalData
                    }}>

                        <form action="#" encType="multipart/form-data">
                            <div className="w-[90%] mx-auto my-4 flex flex-col justify-center p-5 items-center rounded-2xl md:my-12 ]">
                                {displayStep(currentStep)}
                            </div>
                        </form>



                    </StepperContext.Provider>
                </div>
            </div>

            {/* Navigation Controls */}

            {currentStep !== steps.length &&
                <StepperControl 
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                />
            }
        </div>
      );
}

export default NewProperty;