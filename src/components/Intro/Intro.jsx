import React, { useEffect, useState } from "react";
import "../Intro/Intro.css";

export default function Intro({ windowWidth }) {
  return (
    <div
      id="about"
      className="intro-container d-flex flex-column justify-content-end"
      style={{
        height:
          windowWidth < 1400 && windowWidth > 768
            ? "700px"
            : windowWidth <= 765 && windowWidth > 375
            ? "448px"
            : windowWidth <= 375
            ? "218px"
            : "700px",
      }}
    >
      {windowWidth > 768 ? (
        <div className="intro-desc ms-4 mb-3 d-flex flex-column align-items-start justify-content-center">
          <h1>
            We crush your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <button>GET FREE CONSULTATION</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
