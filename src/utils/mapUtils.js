import { saveAs } from "file-saver";

const handleMarkerClick = (waypoints, setWaypoints, index) => {
  const updatedWaypoints = waypoints.filter((_, i) => i !== index);
  setWaypoints([...updatedWaypoints]);
};

const handleMapClick = (event, waypoints, setWaypoints) => {
  const newWaypoint = {
    lat: event.latLng.lat(),
    lng: event.latLng.lng(),
  };
  setWaypoints([...waypoints, newWaypoint]);
};

const downloadGPX = (waypoints) => {
  if (waypoints.length === 0) {
    alert("No waypoints to export.");
    return;
  }

  const gpxContent = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <gpx version="1.1" creator="Esra">
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

  const blob = new Blob([gpxContent], {
    type: "application/gpx+xml;charset=utf-8",
  });

  saveAs(blob, "route.gpx");
};

export { handleMarkerClick, handleMapClick, downloadGPX };
