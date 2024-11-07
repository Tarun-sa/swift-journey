"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext } from "react";
import Map, {Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from '../../public/pin.jpg'
import Image from 'next/image';
const MapBoxMap = () => {
  const context = useContext(UserLocationContext);

  if (!context) {
    throw new Error("MapBoxMap must be used within a LocationContextProvider");
  }

  const { userLocation, setUserLocation } = context;
  console.log(userLocation, "location");

  return (
    <div className="p-5">
      <h2 className="heading">MapBoxmap</h2>
      <div className="rounded-lg overflow-hidden">
        {userLocation && userLocation.latitude && userLocation.longitude && (
          <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            initialViewState={{
              longitude: userLocation.longitude,
              latitude: userLocation.latitude,
              zoom: 3.5,
            }}
            style={{ width: "100vw", height: 770, borderRadius: 15 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            {userLocation.latitude && userLocation.longitude && (
              <Marker
                longitude={userLocation.longitude}
                latitude={userLocation.latitude}
                anchor="bottom"
              >
                <Image src={Pin}  alt="swift-journey-logo" width={15} height={15} className='cursor-pointer'/>
              </Marker>
            )}
          </Map>
        )}
      </div>
    </div>
  );
};

export default MapBoxMap;
