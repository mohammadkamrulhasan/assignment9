import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Ride = () => {
    const {rideType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {rideType} Ride.</h1>
            <p>Want a <Link to="/home">different ride?</Link> </p>
        </div>
    );
};

export default Ride;