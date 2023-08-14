import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const RegistrationForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='login-page'>

            <div className='login-form'>
                <h2 className='heading text-center text-primary mb-4'>Register with us </h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" required />
                            <Form.Control.Feedback type="invalid">
                                Please Enter Your Password
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="validationCustom04">
                            <Form.Label> Re type password</Form.Label>
                            <Form.Control type="text" placeholder="Re-type password" required />
                            <Form.Control.Feedback type="invalid">
                                Enter re type password
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    );
}

export default RegistrationForm;