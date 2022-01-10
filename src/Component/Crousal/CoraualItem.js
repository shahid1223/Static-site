import React from 'react'
import {
    Carousel
} from 'react-bootstrap';

const CoraualItem = (props) => {
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={props.img}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>{props.heading}</h3>
                <p>{props.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}

export default CoraualItem
