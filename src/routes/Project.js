import React from 'react'
import Footer from '../Components/Footer'
import PricingCard from '../Components/GlobalComponents/PricingCard'
import Heroimg2 from '../Components/Heroimg2'

import Navbar from '../Components/Navbar'
import Work from '../Components/Work'

const Project = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="Projects" text="
            Some of my project are following" />
            <Work />
            <PricingCard />
            <Footer />

        </div>
    )
}

export default Project