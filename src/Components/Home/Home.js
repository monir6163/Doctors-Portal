import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Doctors from './Doctors/Doctors';
import Exceptional from './Exceptional/Exceptional';
import './Home.css';
import Information from './Information/Information';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppoinmentBanner></AppoinmentBanner>
            <Testimonial></Testimonial>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default Home;