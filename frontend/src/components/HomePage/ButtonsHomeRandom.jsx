import React from "react";
import { Link } from "react-router-dom";

function ButtonsHome() {
  return (
    <div className="positionbutton">
      <Link className="randomButton" to="/random">
        Propose moi
      </Link>
    </div>
  );
}

export default ButtonsHome;
