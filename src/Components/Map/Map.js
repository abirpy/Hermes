import React from 'react'
import ReactMapGl from "react-map-gl"
import { useState, useEffect, useRef } from 'react';

ReactMapGl.accessToken =
  'pk.eyJ1IjoidGFoc2luYWJpciIsImEiOiJjbDFpaG9yaGgwYTlzM2NuMXUxc2o5bWR3In0.RthxCg25JpHeuluWNds_y';


const Map = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(5);
    const [lat, setLat] = useState(34);
    const [zoom, setZoom] = useState(1.5);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new ReactMapGl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new ReactMapGl.NavigationControl(), 'top-right');

        map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
        <div className='sidebarStyle'>
            <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
        </div>
        <div className='map-container' ref={mapContainerRef} />
        </div>
    );
    };

export default Map;