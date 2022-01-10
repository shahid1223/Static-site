import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    Tooltip
} from 'react-bootstrap';

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="my-5" fluid>
            <Container className="bgcolor" fluid>
                <Row>
                    <Col className="col-xxl-12 col-12 py-5 text-center">
                        <h1>Check Out My Video</h1>
                        <p>Check Out My VideoCheck Out My Video</p>
                        <Button variant="outline-light" onClick={handleShow}>Click Me</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer
