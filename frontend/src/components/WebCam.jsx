import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function WebCam({ camId }) {
  const link = `https://webcams.windy.com/webcams/stream/${camId}`;
  const navigate = useNavigate();

  return (
    <div className="webCamPage">
      <embed className="video" type="video/webm" src={link} />
      <Link className="randomButton" to="/">
        Accueil
      </Link>
      <button
        className="RefreshButton"
        type="button"
        onClick={() => {
          if (window.location.pathname === "/random") {
            window.location.reload();
          } else {
            navigate("/random");
          }
        }}
      >
        Random
      </button>
    </div>
  );
}

WebCam.propTypes = {
  camId: PropTypes.string.isRequired,
};
