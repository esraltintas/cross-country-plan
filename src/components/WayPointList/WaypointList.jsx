import React from "react";
import "./WaypointList.css";
import Waypoint from "../Waypoint/Waypoint";
import useMapStore from "../../store/useMapStore";

const WaypointList = () => {
  const { waypoints, setWaypoints } = useMapStore();

  /*   const handleDelete = (index) => {
    const newWaypoints = [...waypoints];
    newWaypoints.splice(index, 1);
    updateWaypoints(newWaypoints);
  }; */

  console.log("waypointlist", waypoints);

  return (
    <div className="waypoint-list">
      <h2>Route Builder</h2>
      <div className="border-line"></div>
      <ul>
        {waypoints.map((waypoint, index) => (
          <li key={index}>
            <Waypoint title={`Waypoint ${index + 1}`} />
          </li>
        ))}
      </ul>
      <button>Download your Route</button>
    </div>
  );
};

export default WaypointList;
