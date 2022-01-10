import React, { useState, useContext } from 'react'
import context from '../Context/Context';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const loginContext = useContext(context)
    const { logindata, logincode } = loginContext
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        logindata(email, password)
    }
    if (logincode.code === 200) {
        navigate("/admindashboard")
    }
    return (
        <Container className="my-5">
            <Card className='w-50 mx-auto d-flex justify-content-center align-items-center' >
                <h1 className='text-center my-2'>Admin</h1>
                <hr className='w-25 mx-auto text-center' />
                <Container >
                    <Row>
                        <Col className="col-xxl-12 col-12 col-md-8 py-5 mx-auto">
                            <Container>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            placeholder="Enter Email"
                                            {...register("emailRequired", { required: true })}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>
                                    {errors.emailRequired && <span>This field is required</span>}
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            name="password"
                                            type="text"
                                            placeholder="Enter Password"
                                            {...register("passwordRequired", { required: true })}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {errors.passwordRequired && <span>This field is required</span>}
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </Container>
    )
}

export default Login
