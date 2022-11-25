import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";
import iphone from "../assets/iphone.png";

export default function WebCam({ camId }) {
  const link = `https://webcams.windy.com/webcams/stream/${camId}`;

  return (
    <div
      className="webCamPage"
      style={{
        background: `url(${iphone})`,
        backgroundColor: "#fdd521",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
