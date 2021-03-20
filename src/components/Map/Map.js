import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ApiKey from './ApiKey.config';

const containerStyle = {
    width: '450px',
    height: '400px'
};

const center = {
    lat: 23.74335,
    lng: 90.500712
};

const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey={ApiKey}
        >

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;