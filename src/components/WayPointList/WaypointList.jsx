import React from "react";
import "./WaypointList.css";
import { saveAs } from "file-saver";
import Waypoint from "../Waypoint/Waypoint";
import useMapStore from "../../store/useMapStore";

const WaypointList = () => {
  const { waypoints, setWaypoints } = useMapStore();

  const downloadGPX = () => {
    if (waypoints.length === 0) {
      alert("No waypoints to export.");
      return;
    }

    const gpxContent = `
      <?xml version="1.0" encoding="UTF-8" ?>
      <gpx version="1.1" creator="YourAppName">
        ${waypoints
          .map(
            (waypoint, index) =>
              `<wpt lat="${waypoint.lat}" lon="${waypoint.lng}">
                <name>Waypoint ${index + 1}</name>
              </wpt>`
          )
          .join("")}
        ${
          waypoints.length > 1
            ? `<rte>
              ${waypoints
                .map(
                  (waypoint, index) =>
                    `<rtept lat="${waypoint.lat}" lon="${waypoint.lng}">
                      <name>Waypoint ${index + 1}</name>
                    </rtept>`
                )
                .join("")}
            </rte>`
            : ""
        }
      </gpx>`;

    // Convert the GPX content to Blob
    const blob = new Blob([gpxContent], {
      type: "application/gpx+xml;charset=utf-8",
    });

    // Download the Blob as a file
    saveAs(blob, "route.gpx");
  };

  const handleRemoveWaypoint = (index) => {
    const updatedWaypoints = waypoints.filter((_, i) => i !== index);
    setWaypoints([...updatedWaypoints]);
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
              onRemove={() => handleRemoveWaypoint(index)}
            />
          </li>
        ))}
      </ul>
      <button onClick={downloadGPX}>Download your Route</button>
    </div>
  );
};

export default WaypointList;
