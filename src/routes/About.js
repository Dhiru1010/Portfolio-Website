import React from 'react'
import AboutContent from '../Components/AboutContent'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import Navbar from '../Components/Navbar'
const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="About me" text="
            About me is following" />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About