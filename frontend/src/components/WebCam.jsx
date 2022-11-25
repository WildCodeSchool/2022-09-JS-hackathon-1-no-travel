import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

export default function WebCam({ camId }) {
  const link = `https://webcams.windy.com/webcams/stream/${camId}`;

  return (
    <div className="webCamPage">
      <embed className="video" type="video/webm" src={link} />
      <div className="button-cam">
        <Link className="randomButton" to="/">
          Accueil
        </Link>
        <button
          className="RefreshButton"
          type="button"
          onClick={() => window.location.reload()}
        >
          Random
        </button>
      </div>
    </div>
  );
}

WebCam.propTypes = {
  camId: PropTypes.string.isRequired,
};
