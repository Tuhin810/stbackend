import React, { useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { UserCredentials } from '../../../../../@types/UserCredential';
import { signIn } from '../../../../../utils/apis/auth/login';
import { userContext } from '../../../../../context/userDetails/UserContext';
import { log } from 'console';
import { UserDetails } from '../../../../../@types/UserDetails';
import { Container } from 'react-bootstrap';

import '../auth.css';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let userCredential = {
        email: email,
        password: pass
    }

    const a = useContext(userContext);


    const logIn = async (userCredential: UserCredentials) => {
        await signIn(userCredential).then((response: any) => {
            if (response.status === 200) {
                let userDetails: UserDetails = response.data.user as UserDetails;
                console.log(userDetails);
                a.loggedIn(userDetails);
                console.log(a);
            }
        })
    }

    const navigate = useNavigate();

    return (
        <Container>

            <div className='login-page'>

                <div className='login-form'>
                    <h2 className='heading text-center text-primary mb-4'>Log In </h2>
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
                        <Form.Text id="passwordHelpBlock" >
                            Don't have an account ?<span className='text-primary' onClick={()=>{navigate('/signup')}}> SignUp Here .</span> 
                        </Form.Text>
                    </Form>
                    <div className='text-center my-4'>
                        <button className='btn btn-primary text-center' onClick={() => { logIn(userCredential) }} disabled={(email === '' || pass === '')}>Submit</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LoginForm
