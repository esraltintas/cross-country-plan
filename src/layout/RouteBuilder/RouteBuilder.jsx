import React, { useState } from "react";
import "./RouteBuilder.css";
import Map from "../../components/Map/Map";
import WaypointList from "../../components/WayPointList/WaypointList";

const RouteBuilder = () => {
  const handleDownload = () => {
    console.log("Download GPX");
  };
  return (
    <div className="route-builder-wrapper">
      <WaypointList />
      <Map />
    </div>
  );
};

export default RouteBuilder;
