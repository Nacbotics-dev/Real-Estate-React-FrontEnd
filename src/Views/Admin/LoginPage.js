import React from 'react';
import LoginForm from '../../Components/Forms/LoginForm';


function LoginPage(props) {
    return (
        <div>
            <div className="mx-auto flex flex-col justify-center p-5 items-center mt-36">
                <div className="flex-shrink-0 mb-5">
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
                </div>
                <h3 className='text-2xl font-semibold'>Sign in as Admin</h3>
            </div>
            <LoginForm/>
        </div>
    );
}

export default LoginPage;