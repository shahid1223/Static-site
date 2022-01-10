import React from 'react'
import {
    Carousel,
} from 'react-bootstrap';
const Crousal = () => {
    const ByDefaultCrausal = [
        {
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            heading: "React js",
            Text: " We Develope Scallable react application",
            alt:"shahid"
        },
        {
            image: "https://www.mindinventory.com/blog/wp-content/uploads/2018/11/ios-android-development-using-react-native-1024x512.png",
            heading: "React Native",
            Text: "We Develope Best Mobile Application for Ios and Android",
            alt:"shahid"
        },
        {
            image: "https://www.cloudsavvyit.com/p/uploads/2019/07/2350564e.png?width=1198&trim=1,1&bg-color=000&pad=1,1",
            heading: "Node js",
            Text: "We Develope Backenf in node js with expresss js and for database we use Mongo DB",
            alt:"shahid"
        },
    ]
    return (
        <Carousel className="crousal">
            {ByDefaultCrausal && ByDefaultCrausal.map((val, key) => {
                return (
                    <Carousel.Item key={key}>
                        <img
                            className="d-block w-100"
                            src={val.image}
                            alt={val.alt}
                        />
                        <Carousel.Caption>
                            <h3>{val.heading}</h3>
                            <p>{val.Text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Crousal
