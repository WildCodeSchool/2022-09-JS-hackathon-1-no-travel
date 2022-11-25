import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import iphone from "../assets/iphone.png";

export default function WebCam({ camId }) {
  const link = `https://webcams.windy.com/webcams/stream/${camId}`;
  const navigate = useNavigate();

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
      <Link className="button-cam" to="/">
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
