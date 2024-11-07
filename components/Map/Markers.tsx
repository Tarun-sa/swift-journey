"use client";

import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useEffect } from "react";
import { Marker } from "react-map-gl";
import Pin from "../../public/pin.jpg";
import Image from "next/image";
import { SourceCordinateContext } from "@/context/SourceCordContext";
import { DestinationCordinateContext } from "@/context/DestinationCordContext";

const Markers = () => {
  const context = useContext(UserLocationContext);

  if (!context) {
    throw new Error("MapBoxMap must be used within a LocationContextProvider");
  }

  const { userLocation, setUserLocation } = context;

  const { sourceCord, setSourceCord } = useContext(SourceCordinateContext);
  const { destinationCord, setDestinationCord } = useContext(
    DestinationCordinateContext
  );

  return (
    <>
      {/* User Loaction Marker */}
      {userLocation.latitude && userLocation.longitude && (
        <Marker
          longitude={userLocation.longitude}
          latitude={userLocation.latitude}
          anchor="bottom"
        >
          <Image
            src={Pin}
            alt="userlocation"
            width={35}
            height={35}
            className="cursor-pointer"
          />
        </Marker>
      )}
      {/* Source Loaction Marker */}
      {sourceCord.latitude!==undefined && sourceCord.longitude!==undefined && (
        <>
   
          <Marker
            longitude={sourceCord.longitude}
            latitude={sourceCord.latitude}
           anchor="top"
          >
            <Image
              src={Pin}
              alt="source location"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Marker>
        </>
      )}

      {/* Destination Loaction Marker */}
      {destinationCord.latitude!==undefined && destinationCord.longitude!==undefined && (
        <Marker
          longitude={destinationCord.longitude}
          latitude={destinationCord.latitude}
          anchor="top"
        
        >
          <Image
            src={Pin}
            alt="destination location"
            width={50}
            height={50}
            className="cursor-pointer"
            
          />
        </Marker>
      )}
    </>
  );
};

export default Markers;
