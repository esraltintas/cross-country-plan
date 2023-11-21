import React from "react";
import "./WaypointList.css";
import Waypoint from "../Waypoint/Waypoint";
import useMapStore from "../../store/useMapStore";
import { handleMarkerClick, downloadGPX } from "../../utils/mapUtils";

const WaypointList = () => {
  const { waypoints, setWaypoints } = useMapStore();

  const generateGPXAndDownload = () => {
    try {
      downloadGPX(waypoints);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="waypoint-list">
      <h2>Route Builder</h2>
      <div className="border-line"></div>
      <ul>
        {waypoints.map((waypoint, index) => (
          <li key={index}>
            <Waypoint
              title={`Waypoint ${index + 1}`}
              onRemove={() => handleMarkerClick(waypoints, setWaypoints, index)}
            />
          </li>
        ))}
      </ul>
      <button onClick={generateGPXAndDownload}>Download your Route</button>
    </div>
  );
};

export default WaypointList;
