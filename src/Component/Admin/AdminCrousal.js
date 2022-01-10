import React, { useState, useContext } from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import context from '../Context/Context';
import {
    Container,
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap';


const AdminCrousal = () => {
    const crausalContext = useContext(context)
    const { addcrausal , crausalcreated} = crausalContext
    const [heading, setHeading] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState([])
    const [alt, setAlt] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    if(crausalcreated === 200){
        toast.success('Crausal Added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const onSubmit = () => {
        addcrausal(heading, text, image, alt)
    }
    return (
        <Container className="my-5">
            <ToastContainer />
            <h1 className='text-center'>Add Crausal</h1>
            <hr className='w-25 mx-auto text-center' />
            <Container >
                <Row>
                    <Col className="col-xxl-12 col-12 col-md-8 py-5 mx-auto">
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Heading</Form.Label>
                                <Form.Control
                                    name="heading"
                                    type="text"
                                    placeholder="Enter Heading"
                                    {...register("headingRequired", { required: true })}
                                    value={heading}
                                    onChange={(e) => setHeading(e.target.value)}
                                />
                                {errors.headingRequired && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Text</Form.Label>
                                <Form.Control
                                    name="text"
                                    type="text"
                                    placeholder="Enter Text"
                                    {...register("textRequired", { required: true })}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                {errors.textRequired && <span>This field is required</span>}
                            </Form.Group>

                            {/* <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Choose image</Form.Label>
                                <Form.Control
                                    type="file"
                                    {...register("image", { required: true })}
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                {errors.image && <span>This field is required</span>}
                            </Form.Group> */}


                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control
                                    name="imagedec"
                                    type="text"
                                    placeholder="Enter Image Discription"
                                    {...register("image", { required: true })}
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                {errors.image && <span>This field is required</span>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Image Discription</Form.Label>
                                <Form.Control
                                    name="imagedec"
                                    type="text"
                                    placeholder="Enter Image Discription"
                                    {...register("imagedec", { required: true })}
                                    value={alt}
                                    onChange={(e) => setAlt(e.target.value)}
                                />
                                {errors.imagedec && <span>This field is required</span>}
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

export default AdminCrousal
