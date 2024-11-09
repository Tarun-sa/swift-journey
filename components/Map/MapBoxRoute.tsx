import React from "react";
import { Layer, Source } from "react-map-gl";

interface MapBoxRouteProps {
  coordinates: number[][] | undefined;
}

const MapBoxRoute: React.FC<MapBoxRouteProps> = ({ coordinates }) => {
  if (!coordinates || coordinates.length < 2) {
    console.error("Invalid coordinates for the route.");
    return null;
  }

  return (
    <Source
      type="geojson"
      data={{
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates,
        },
      }}
    >
      <Layer
        id="route-layer"
        type="line"
        paint={{
          "line-color": "#007AFF", // Blue line
          "line-width": 4, // Line thickness
        }}
        layout={{
          "line-join": "round", // Smooth line joins
          "line-cap": "square", // Square line endings
        }}
      />
    </Source>
  );
};

export default MapBoxRoute;
