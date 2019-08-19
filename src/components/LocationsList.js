import React, { useEffect, useState } from 'react';
import LocationCard from "./LocationCard"
import Axios from 'axios';
export default function LocationsList() {

    const [theLocation, setTheLocation] = useState();

    useEffect(() => {


        Axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(response => {
                setTheLocation(response.data.results);
            })
            .catch(error => {
                console.error("Another error? Damn.....", error);
            });

    }, [])

    if (!theLocation) {
        return (<div>Loading......</div>)
    }

    else {
        return (

            <section className='location-list grid-view'>
                <div className='theLocations'>{theLocation.map((onelocation) => <LocationCard tileData={onelocation} />)} </div>
            </section>)

    };

};