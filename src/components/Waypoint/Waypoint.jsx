import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Waypoint.css";

const Waypoint = ({ title }) => {
  return (
    <div className="waypoint">
      <div className="title-wrapper">
        <FontAwesomeIcon icon={faBars} />
        {title && <div className="title">{title}</div>}
      </div>
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

export default Waypoint;
