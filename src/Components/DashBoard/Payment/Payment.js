import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOut from './CheckOut';


const stripePromise = loadStripe('pk_test_51ImuNwEWcspB5Pfyygtb9uwF2II64zAYm1SU2rq9dSG6JBo8a4wqmhbFcAakleDkOUIup7EFrxeHEdMS30lNmrwH009j5KNsNQ');
const Payment = () => {
    const { appoinmentID } = useParams();
    const [appoinment, setAppoinment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appoinments/${appoinmentID}`)
            .then(res => res.json())
            .then(data => setAppoinment(data))
    }, [appoinmentID])
    return (
        <div>
            <h3>PLease for pay: {appoinment.patientname} for {appoinment.servicename}</h3>
            <h2>Price for Service: ${appoinment.price}</h2>
            {
                appoinment?.price &&
                <Elements stripe={stripePromise}>
                    <CheckOut
                        appoinment={appoinment}
                    />
                </Elements>
            }
        </div>
    );
};

export default Payment;