import React,{useEffect,useState,useRef, useCallback} from 'react';




function Stepper({steps,currentStep}) {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();

    
    const updateStep = useCallback( (stepNumber,steps)=>{

        const newSteps = [...steps]
        let count = 0

        while(count < newSteps.length){
            // Current step
            if (count === stepNumber) {
                newSteps[count] ={
                    ...newSteps[count],
                    highlighted:true,
                    selected:true,
                    completed:false,
                };

                count++;
                
            }

            //Step Completed

            else if (count < stepNumber) {
                newSteps[count] ={
                    ...newSteps[count],
                    highlighted:false,
                    selected:true,
                    completed:true,
                };

                count++;
            }

            //Step Pending
            else{
                newSteps[count] ={
                    ...newSteps[count],
                    highlighted:false,
                    selected:false,
                    completed:false,
                };

                count++;
            }
        }

        return newSteps;

    },[],)

    useEffect(()=>{
        // Create Object

        const stepsState = steps.map((step,index)=>
        Object.assign(
            {},
            {
                description:step,
                completed:false,
                highlighted:index === 0 ? true : false,
                selected: index === 0 ? true : false,
            }
        )
        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep -1,stepRef.current);
        setNewStep(current)
    },[steps,currentStep,updateStep]);

    const displaySteps = newStep.map((step,index)=>{

        return (
            <div key={index} className=
            {index !== newStep.length - 1 ? 'flex items-center w-full' : "flex items-center"}>

                <div className='relative flex flex-col items-center text-teal-600'>

                    <div className={`flex items-center justify-center w-12 h-12
                     py-3 transition duration-500 ease-in-out 
                     border-2  rounded-full ${
                        step.completed ? 
                        "bg-green-600 text-white font-bold border border-green-600"
                        : ""} ${
                            step.selected ?
                            "bg-[#fdae5c] border-[#fdae5c] text-black"
                            :"border-gray-300 text-gray-300"
                        }`}>
                        
                        {/* Display number */}
                        {step.completed ? (
                            <span className='text-xl font-bold text-white'>&#10003;</span>
                        ):(
                            index+1
                        )}
                    </div>
        
                    <div className={`opacity-0 absolute top-0 w-32 mt-16 
                    text-xs font-medium text-center uppercase md:opacity-100
                    ${step.highlighted ? "text-gray-900": "text-gray-400"}`}>
                        {/* Display  description*/}
                        {step.description}
                    </div>
                </div>
                <div  className={`flex-auto transition duration-500 ease-in-out border-t-2
                ${step.completed ? "border-green-600" : " border-gray-300"}
                `}>           
                    {/* Display Line  */}
                </div>
            </div>
        )
    }); 


    
    return (
        <div className='w-3/4 mx-auto  items-center justify-between p-4 flex md:w-[90%]'>

        {displaySteps}
            
        </div>
    );
}

export default Stepper;