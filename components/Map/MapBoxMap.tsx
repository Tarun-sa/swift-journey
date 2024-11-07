"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { SourceCordinateContext } from "@/context/SourceCordContext";
import { DestinationCordinateContext } from "@/context/DestinationCordContext";

const MapBoxMap = () => {
  const context = useContext(UserLocationContext);
  const mapRef=useRef<any>(null)

  if (!context) {
    throw new Error("MapBoxMap must be used within a LocationContextProvider");
  }

  const { userLocation, setUserLocation } = context;
  const { sourceCord, setSourceCord } = useContext(SourceCordinateContext);
  const { destinationCord, setDestinationCord } = useContext(
    DestinationCordinateContext);

  useEffect(()=>{

    if(sourceCord.latitude!==undefined && sourceCord.longitude!==undefined){
      mapRef?.current?.flyTo({
        center:[sourceCord.longitude,sourceCord.latitude],
        duration:2500
      })
    }
  
  },[sourceCord])

  useEffect(()=>{

    if(destinationCord.latitude!==undefined && destinationCord.longitude!==undefined){
      mapRef?.current?.flyTo({
        center:[destinationCord.longitude,destinationCord.latitude],
        duration:2500
      })
    }
  
  },[destinationCord])
  
  

  return (
    <div className="p-5">
      <h2 className="heading">MapBoxmap</h2>
      <div className="rounded-lg overflow-hidden">
        {userLocation && userLocation.latitude && userLocation.longitude && (
          <Map
          ref={mapRef}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation.longitude,
              latitude: userLocation.latitude,
              zoom: 10,
            }}
            style={{ width: "100vw", height: 770, borderRadius: 15 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Markers />
          </Map>
        )}
      </div>
    </div>
  );
};

export default MapBoxMap;
