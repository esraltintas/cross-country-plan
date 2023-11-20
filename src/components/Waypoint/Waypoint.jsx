import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons";

const Waypoint = (title) => {
  return (
    <div className="waypoint">
      <FontAwesomeIcon icon={faBars} />
      {title && <div className="title">{title}</div>}
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

export default Waypoint;
