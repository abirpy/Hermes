import React from 'react'
import ReactMapGl from "react-map-gl"
import { useState } from 'react';

const Map = () => {
const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
    });
  return (
    <ReactMapGl 
    {...viewport}
    mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX_TOKEN}>
        markers here
    </ReactMapGl>
  )
}

export default Map