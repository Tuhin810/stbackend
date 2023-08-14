import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
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
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => { setEmail(event.target.value) }} />
                    </Form.Group>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={(event) => { setPass(event.target.value) }}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Form>
                <div className='text-center my-4'>
                    <button className='btn btn-primary text-center' onClick={()=>{signIn(userCredential)}}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
