import React from "react";
import "./loader.scss";

const loader = () => {
  return (
    <div className="loader">
      <div class="cube-wrapper">
        <div class="cube-folding">
          <span class="leaf1"></span>
          <span class="leaf2"></span>
          <span class="leaf3"></span>
          <span class="leaf4"></span>
        </div>
        <span class="loading" data-name="Loading">
          Loading
        </span>
      </div>
    </div>
  );
};

export default loader;
