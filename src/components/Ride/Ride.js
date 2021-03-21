import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Map from '../Map/Map';

const Ride = () => {
    const { rideType } = useParams();

    const history = useHistory();
    const onNavigateTravel=()=>{
        history.push("/travel");
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Let's book a {rideType} Ride.</h1>
            <div className="container">
                <div>
                    <form >
                        <input type="text" placeholder="Pick From" onBlur="" required></input>
                        <br />
                        <input type="text" placeholder="Pick To" onBlur="" required></input>
                        <br />
                        <input type="submit" value="Search" onClick={onNavigateTravel} ></input>

                    </form>
                    <p>Want a <Link to="/home">different ride?</Link> </p>

                </div>
                <div>
                <Map></Map>
                </div>
            </div>

           
        </div>
    );
};

export default Ride;