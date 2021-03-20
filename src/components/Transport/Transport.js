import React, { useEffect, useState } from 'react';
import './Transport.css';
import bike from '../../image/bike.jpg';
import taxi from '../../image/taxi.png';
import bus from '../../image/bus.jpg';
import train from '../../image/train.jpeg';
// import vahicleData from '../../fakeData.json';
import Ride from '../Ride/Ride';


const Transport = () => {
    // const first4 = vahicleData.slice(0, 3);
    // const [ride, setRide] = useState(first4);
    // const [place, setPlace] = useState([]);

    // const handleAddPlace = (ride) => {
    //     const newPlace = [...place, ride];
    //     setPlace(newPlace);
    // }

    return (
        <div>
            {/* {
                ride.map(ride => <Ride
                    handleAddPlace={handleAddPlace} 
                 ride={ride}
                 ></Ride>)
            } */}
            <div className="container" >
                <div className="bike">
                    <div ><img src={bike} alt="" /></div>
                    <div> <button>Bike</button> </div>
                </div>
                <div className="taxi">
                    <div><img src={taxi} alt="" /></div>
                    <div> <button>Taxi</button> </div>
                </div>
                <div className="bus">
                    <div><img src={bus} alt="" /></div>
                    <div> <button>Bus</button> </div>
                </div>
                <div className="train">
                    <div><img src={train} alt="" /></div>
                    <div> <button>Train</button> </div>
                </div>
            </div>
        </div>


    );
};

export default Transport;