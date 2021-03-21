import React, { useEffect, useState } from 'react';
import './Transport.css';
import bike from '../../image/bike.jpg';
import taxi from '../../image/taxi.png';
import bus from '../../image/bus.jpg';
import train from '../../image/train.jpeg';
// import vahicleData from '../../fakeData.json';
import Ride from '../Ride/Ride';
import Login from '../Login/Login';
import { useHistory } from 'react-router';



const Transport = () => {
    // const first4 = vahicleData.slice(0, 3);
    // const [ride, setRide] = useState(first4);
    // const [place, setPlace] = useState([]);

    // const handleAddPlace = (ride) => {
    //     const newPlace = [...place, ride];
    //     setPlace(newPlace);
    // }
    // const [isAuth, setIsAuth]=useState(true);
    // if(isAuth){
    //     return <Redirect to ='/login'/>
    // }
    const history = useHistory();
   const onNavigateLogin=()=>{
       history.push("/login");
   }


    return (
        <div>
            {/* {
                ride.map(ride => <Ride
                    handleAddPlace={handleAddPlace} 
                 ride={ride}
                 ></Ride>)
            } */}
            <div className="container">
                <div className="bike" onClick={onNavigateLogin}>
                    <div ><img src={bike} alt="" /></div>
                    <div> <button onClick={onNavigateLogin} >Bike</button> </div>
                </div>
                <div className="taxi" onClick={onNavigateLogin}>
                    <div><img src={taxi} alt="" /></div>
                    <div> <button onClick={onNavigateLogin}>Taxi</button> </div>
                </div>
                <div className="bus" onClick={onNavigateLogin}>
                    <div><img src={bus} alt="" /></div>
                    <div> <button onClick={onNavigateLogin}>Bus</button> </div>
                </div>
                <div className="train" onClick={onNavigateLogin}>
                    <div><img src={train} alt="" /></div>
                    <div> <button onClick={onNavigateLogin}>Train</button> </div>
                </div>
            </div>
        </div>


    );
};

export default Transport;