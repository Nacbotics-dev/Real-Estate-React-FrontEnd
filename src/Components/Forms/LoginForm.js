import React,{ useEffect, useState,useRef} from 'react';
import AuthAPI from '../../APIMethods/AuthAPI';
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
    
    const [togglePassword,setTogglePassword] = useState(false)
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')
    const [errorMsg, setErrorMsg] = useState('');
    const [isAuth,setAuthenticated] = useState(false)
    const revealError = useRef(false)


    let navigateTo = useNavigate()

    
    const TogglePassword = (e)=>{
        setTogglePassword(!togglePassword)
    }

    useEffect(() =>{
        if (isAuth) {
            navigateTo('/addNew')
        }
    },[isAuth,navigateTo])


    const handleSubmit = AuthAPI(JSON.stringify({username,password}),revealError,setErrorMsg,setAuthenticated)


    return (
        <form  onSubmit={handleSubmit}>
            <h3 ref={revealError} className='text-center text-base text-red-600 font-semibold'>{errorMsg}</h3>
            <div className="w-[90%] mx-auto flex flex-col justify-center p-5 items-center rounded-2xl mb-36 bg-gray-400  md:w-[50%] lg:w-[30%]">

                <div className="input-group h-12 md:h-14">
                    <input type="text" id="username" name='username' required className="input h-full focus:ring-[#fdae5c]" autoComplete='off' onChange={(e)=>{setUsername(e.target.value)}}/>
                    <label htmlFor="username" className="input-label">Username</label>
                </div>

                <div className="input-group h-12 md:h-14">
                    <input type={`${togglePassword? 'text' : 'password'}`} id="password" name='password' required className="input h-full focus:ring-[#fdae5c]" autoComplete='off' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <label htmlFor="password" className="input-label">Password</label>

                    
                    <span className='absolute w-6 right-0 self-center mx-[14px]' onClick={TogglePassword}>
                        {togglePassword ?
                            <svg 
                            className="w-full h-full" 
                            fill="none" 
                            stroke="#fdae5c" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        :
                            <svg 
                                className="w-full h-full" 
                                fill="none" 
                                stroke="#fdae5c" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        }
                    </span>
                </div>


                <button className='max-w-[480px] w-full rounded-md  h-12 text-base font-semibold text-[#fdaf61] bg-[#e1e4e9] hover:bg-[#fdaf61] hover:text-white md:h-14'>Login</button>

            </div>

        </form>
    );
}

export default LoginForm;