import React, { useEffect, useState } from "react";
import "../QuestionCard/QuestionCard.css";
import { Dash, Plus } from "react-bootstrap-icons";

export default function QuestionCard({ title, body, windowWidth }) {
  const [color, setColor] = useState("#000000");
  const [expand, setExpand] = useState(false);

  const handleOpen = (value) => {
    if (value) {
      setColor("#6B3CC9");
    } else {
      setColor("#000000");
    }
    setExpand(value);
  };
  return (
    <div
      className="question-card-wrapper d-flex flex-column justify-content-center align-items-center"
      style={{
        height:
          expand != true
            ? windowWidth < 1400 && windowWidth > 768
              ? "76px"
              : windowWidth <= 768 && windowWidth > 375
              ? "104px"
              : windowWidth <= 375
              ? "160px"
              : "76px"
            : "auto",
      }}
    >
      <div
        className="d-flex flex-row justify-content-between align-items-start"
        style={{
          width: "100%",
          height: windowWidth < 1400 && windowWidth > 768 ? "28px" : "auto",
        }}
      >
        <h3
          style={{
            color: color,
            fontSize: windowWidth < 1400 && windowWidth > 768 ? "22px" : "20px",
          }}
        >
          {title}
        </h3>
        {expand ? (
          <Dash
            style={{
              width: "28px",
              height: "28px",
              color: color,
              cursor: "pointer",
            }}
            onClick={() => handleOpen(false)}
          />
        ) : (
          <Plus
            style={{
              width: "28px",
              height: "28px",
              color: color,
              cursor: "pointer",
            }}
            onClick={() => handleOpen(true)}
          />
        )}
      </div>
      {expand ? <div style={{ marginTop: "10px" }}>{body}</div> : <></>}
    </div>
  );
}
