import React from 'react'
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap';

const Gallery = () => {
    const Photo = [
        { image: "https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
        { image: "https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
        { image: "https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
        { image: "https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
        { image: "https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
        { image: "https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" },
    ]
    return (
        <Container className="my-5">
            <h1 className='text-center'>Gallery</h1>
            <hr className='w-25 mx-auto text-center' />
            <Container>
                <Row className="my-5">
                    {Photo.map((val, key) => {
                        return (
                            <Col className="col-md-4 col-10 col-xxl-4 mx-auto my-2" key={key}>
                                <Card>
                                    <Card>
                                        <img src="https://images.unsplash.com/photo-1621684793835-1dfa38971adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className='img-fluid' alt="shahid"/>
                                    </Card>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default Gallery
