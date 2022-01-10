import React, { useContext } from 'react'
import Context from '../Context/Context';
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap';

const Services = () => {
    const servicContext = useContext(Context);
    const { servicesdata } = servicContext
    const ByDefaultCrausal = [
        {
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            heading: "React js",
            pera: " We Develope Scallable react application"
        },
        {
            image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            heading: "React Native",
            pera: "We Develope Best Mobile"
        },
        {
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            heading: "Node js",
            pera: "We Develope Backend in node js "
        },
    ]
    return (
        <Container className="my-5 bg-light pt-5" fluid>
            <h1 className='text-center'>Our Services</h1>
            <hr className='w-25 mx-auto text-center' />
            <Container>
                <Row className="my-5">
                    {ByDefaultCrausal && ByDefaultCrausal.map((val, key) => {
                        return (
                            <Col className="col-md-4 col-10 col-xxl-4 my-3 mx-auto" key={key}>
                                <Card className="d-flex justify-content-center align-items-start flex-column">
                                    <Card.Img variant="top" src={val.image} />
                                    <Card.Body>
                                        <Card.Title>{val.heading}</Card.Title>
                                        <Card.Text>
                                            {val.pera}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </Container>
    )
}

export default Services
