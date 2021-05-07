import React from "react";
import "./style.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function FullPageLoader() {
  return (
    <div className="loader-container">
      <CircularProgress />
    </div>
  );
}

export default FullPageLoader;
