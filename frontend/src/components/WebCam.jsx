import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function WebCam({ cam }) {
  const link = `https://webcams.windy.com/webcams/stream/${cam?.id}`;
  const navigate = useNavigate();

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
    <div
      className="webCamPage">
      {cam && (
        <>
          <embed className="video" type="video/webm" src={link} />
          <p style={{ color: "white" }}>{cam.city}</p>
        </>
      )}
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
        Propose moi d'autre
      </button>
      <Link className="RefreshButton" to="/">
        Accueil
      </Link>
    </div>
  );
}

WebCam.propTypes = {
  cam: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }),
};

WebCam.defaultProps = {
  cam: null,
};
