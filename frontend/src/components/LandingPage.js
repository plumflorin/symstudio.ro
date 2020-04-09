import React from 'react'
import AppNavbar from './AppNavbar';
import MainPage from './MainPage';
import Carousel from './Carousel';
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const LandingPage = () => {
    return (
        <>
            <AppNavbar />
            <MainPage />
            <Carousel />
            <Footer />
        </>
    )
}

export default LandingPage