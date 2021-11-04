import React from 'react';
import Contact from '../../Home/Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AppoinmentHeader from './AppoinmentHeader/AppoinmentHeader';
import AviableAppoinment from './AviableAppoinment/AviableAppoinment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Header></Header>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AviableAppoinment date={date}></AviableAppoinment>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;