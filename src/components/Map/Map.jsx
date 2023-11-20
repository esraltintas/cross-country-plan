// Map.js
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import useMapStore from "../../store/useMapStore";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: -34.397,
  lng: 150.644,
};

const Map = () => {
  const { waypoints, setWaypoints } = useMapStore();

  const handleMapClick = (event) => {
    const newWaypoint = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    setWaypoints([...waypoints, newWaypoint]);
  };

  const handleMarkerClick = (index) => {
    const updatedWaypoints = waypoints.filter((_, i) => i !== index);
    setWaypoints([...updatedWaypoints]);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9IAcgYgVxaas-K5rXIeiE8LFnotQ2EIc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={10}
        onClick={handleMapClick}
      >
        {waypoints &&
          waypoints.map((waypoint, index) => (
            <Marker
              key={index}
              position={waypoint}
              label={{
                text: `${index + 1}`,
                color: "white",
                backgroundColor: "#383838",
                padding: "8px",
              }}
              onClick={() => handleMarkerClick(index)}
            />
          ))}
        {waypoints.length > 0 && (
          <Polyline
            path={waypoints}
            options={{
              strokeColor: "#383836",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
