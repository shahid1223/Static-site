import React from 'react'
import AboutUs from './About/AboutUs'
import ContactForm from './ContactUs/ContactForm'
import Crousal from './Crousal/Crousal'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import Services from './Services/Services'

const index = () => {
    return (
        <>
            <Crousal/>
            <AboutUs/>
            <Services/>
            <Gallery/>
            <Footer/>
            <ContactForm/>
        </>
    )
}

export default index
