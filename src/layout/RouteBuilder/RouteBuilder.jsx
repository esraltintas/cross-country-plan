import React, { useState } from "react";
import "./RouteBuilder.css";
import Map from "../../components/Map/Map";
import WaypointList from "../../components/WayPointList/WaypointList";

const RouteBuilder = () => {
  const [waypoints, setWaypoints] = useState([]);

  const updateWaypoints = (newWaypoints) => {
    setWaypoints(newWaypoints);
  };

  const handleDownload = () => {
    console.log("Download GPX");
  };
  return (
    <div className="route-builder-wrapper">
      <WaypointList waypoints={waypoints} updateWaypoints={updateWaypoints} />
      <Map waypoints={waypoints} />
    </div>
  );
};

export default RouteBuilder;
