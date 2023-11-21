import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import useMapStore from "../../store/useMapStore";
import { handleMarkerClick, handleMapClick } from "../../utils/mapUtils";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 52.52,
  lng: 13.404,
};

const Map = () => {
  const { waypoints, setWaypoints } = useMapStore();

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9IAcgYgVxaas-K5rXIeiE8LFnotQ2EIc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={15}
        onClick={(event) => handleMapClick(event, waypoints, setWaypoints)}
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
              onClick={() => handleMarkerClick(waypoints, setWaypoints, index)}
            />
          ))}
        {waypoints.length > 0 && (
          <Polyline
            path={waypoints}
            options={{
              strokeColor: "#383836",
              strokeOpacity: 1,
              strokeWeight: 3,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
