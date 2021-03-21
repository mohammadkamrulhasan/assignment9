import React from 'react';
import Map from '../Map/Map';
import './Travel.css';

const Travel = () => {
    return (
        <div>
            <div className="travel">
                <div>
                   <h1> You are Traveling</h1> 
                   <h1>From: Mohammadpur</h1>
                   <h1>To: Tongi</h1>
                     
                </div>

                <div>
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Travel;