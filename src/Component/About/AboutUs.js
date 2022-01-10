import React, { useState, useRef } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Overlay,
    Tooltip
} from 'react-bootstrap';

const AboutUs = () => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const ByDefaultCrausal = [
        {
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            heading: "React js",
            pera: " We Develope Scallable react application",
            alt:"shahid"
        }
    ]
    return (
        <Container className="my-5">
            <h1 className='text-center'>About Us</h1>
            <hr className='w-25 mx-auto text-center' />
            <Container>
                {ByDefaultCrausal && ByDefaultCrausal.map((val, key) => {
                    return (
                        <Row className="my-5" key={key}>
                            <Col className="col-lg-6 col-md-12 col-xxl-6 d-flex justify-content-center align-items-end flex-column">
                                <figure>
                                    <img src={val.image} className='img-fluid about_img' alt={val.alt}/>
                                </figure>
                            </Col>
                            <Col className="col-lg-6 col-md-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
                                <h1>{val.heading}</h1>
                                <p>
                                    {val.pera}
                                </p>
                                <Button variant="outline-info" ref={target} onClick={() => setShow(!show)}>Click Me</Button>
                                <Overlay target={target.current} show={show} placement="right">
                                    {(props) => (
                                        <Tooltip id="overlay-example" {...props}>
                                            My Tooltip
                                        </Tooltip>
                                    )}
                                </Overlay>

                            </Col>
                        </Row>
                    )
                })}
            </Container>
        </Container>
    )
}

export default AboutUs
