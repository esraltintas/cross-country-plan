import React from "react";
import "./WaypointList.css";
import Waypoint from "../Waypoint/Waypoint";

const WaypointList = ({ waypoints, updateWaypoints }) => {
  const handleDelete = (index) => {
    const newWaypoints = [...waypoints];
    newWaypoints.splice(index, 1);
    updateWaypoints(newWaypoints);
  };

  return (
    <div className="waypoint-list">
      <h2>Route Builder</h2>
      <div className="border-line"></div>
      <ul>
        {waypoints.map((waypoint, index) => (
          <li key={index}>
            <Waypoint title={waypoint.title} />
          </li>
        ))}
      </ul>
      <button onClick={handleDelete}>Download your Route</button>
    </div>
  );
};

export default WaypointList;
