import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';

const Ride = () => {
    const {rideType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {rideType} Ride.</h1>

            <form >
                <input type="text" placeholder="Pick From" onBlur="" required></input>
                <input type="text" placeholder="Pick To" onBlur="" required></input>
                <br/>
                <input type="submit" value="Search" ></input>

            </form>
            <p>Want a <Link to="/home">different ride?</Link> </p>

            <Map></Map>
        </div>
    );
};

export default Ride;