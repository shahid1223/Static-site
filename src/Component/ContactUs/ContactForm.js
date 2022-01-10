import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import context from '../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Container,
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap';

const ContactForm = () => {
    const formContext = useContext(context)
    const { PostFormData, code } = formContext
    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [textarea, setTextArea] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {
        PostFormData(fullname, email, textarea)
        if (code === 200) {
            toast('Thank you', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    return (
        <Container className="my-5">
            <ToastContainer />
            <h1 className='text-center'>Contact Us</h1>
            <hr className='w-25 mx-auto text-center' />
            <Container >
                <Row>
                    <Col className="col-xxl-12 col-12 col-md-8 py-5 mx-auto">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    name="fullname"
                                    type="text"
                                    placeholder="Enter Name"
                                    {...register("nameRequired", { required: true })}
                                    value={fullname}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Form.Group>
                            {errors.nameRequired && <span>This field is required</span>}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    {...register("emailRequired", { required: true })}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            {errors.emailRequired && <span>This field is required</span>}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>about yourself</Form.Label>
                                <Form.Control
                                    name="textarea"
                                    as="textarea"
                                    rows={3}
                                    {...register("areaRequired", { required: true })}
                                    value={textarea}
                                    onChange={(e) => setTextArea(e.target.value)}
                                />
                                {errors.areaRequired && <span>This field is required</span>}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ContactForm
