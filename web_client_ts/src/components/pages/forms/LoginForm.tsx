import React, { useState } from 'react';

import './login.css';
import { UserCredentials } from '../../../@types/UserCredential';
import { signIn } from '../../../utils/apis/auth/login';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let userCredential = {
        email: email,
        password: pass
    }

    return (
        <div className='login-page'>
            <div className='login-form'>
                <h2 className='heading text-center text-primary mb-4'>Log In</h2>
                <div className='text-center my-4'>
                    <button className='btn btn-primary text-center' onClick={()=>{signIn(userCredential)}}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
