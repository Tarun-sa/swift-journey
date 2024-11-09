"use client";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useEffect, useRef } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Markers from "./Markers";
import { SourceCordinateContext } from "@/context/SourceCordContext";
import { DestinationCordinateContext } from "@/context/DestinationCordContext";
import { generateUUID } from "@/app/api/search-address/route";
import { DirectionDataContext } from "@/context/DirectionDataContext";
import MapBoxRoute from "./MapBoxRoute";

const MAPBOX_DRIVING_ENDPOINT =
  "https://api.mapbox.com/directions/v5/mapbox/driving/";

const MapBoxMap = () => {
  const sessionToken = generateUUID();
  const context = useContext(UserLocationContext);
  const mapRef = useRef<any>(null);

  if (!context) {
    throw new Error("MapBoxMap must be used within a LocationContextProvider");
  }

  const { userLocation, setUserLocation } = context;
  const { sourceCord, setSourceCord } = useContext(SourceCordinateContext);
  const { destinationCord, setDestinationCord } = useContext(
    DestinationCordinateContext
  );

  const { directionData, setDirectionData } = useContext(DirectionDataContext);

  useEffect(() => {
    if (
      sourceCord.latitude !== undefined &&
      sourceCord.longitude !== undefined
    ) {
      mapRef?.current?.flyTo({
        center: [sourceCord.longitude, sourceCord.latitude],
        duration: 2500,
      });
    }
    if (
      sourceCord.latitude !== undefined &&
      sourceCord.longitude !== undefined &&
      destinationCord.latitude !== undefined &&
      destinationCord.longitude !== undefined
    ) {
      getDirectionRoute();
    }
  }, [sourceCord]);

  useEffect(() => {
    if (
      destinationCord.latitude !== undefined &&
      destinationCord.longitude !== undefined
    ) {
      mapRef?.current?.flyTo({
        center: [destinationCord.longitude, destinationCord.latitude],
        duration: 2500,
      });
    }
    if (
      sourceCord.latitude !== undefined &&
      sourceCord.longitude !== undefined &&
      destinationCord.latitude !== undefined &&
      destinationCord.longitude !== undefined
    ) {
      getDirectionRoute();
    }
  }, [destinationCord]);

  const getDirectionRoute = async () => {
    try {
      const response = await fetch(
        `${MAPBOX_DRIVING_ENDPOINT}${sourceCord.longitude},${sourceCord.latitude};${destinationCord.longitude},${destinationCord.latitude}?overview=full&geometries=geojson&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result, "res");
      setDirectionData(result);
    } catch (error) {
      console.error("Error fetching directions:");
    }
  };

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
            {directionData?.routes?.length ? (
              <MapBoxRoute
                coordinates={directionData.routes[0].geometry.coordinates}
              />
            ) : null}
          </Map>
        )}
      </div>
    </div>
  );
};

export default MapBoxMap;
