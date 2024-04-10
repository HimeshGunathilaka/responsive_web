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
    <div className="question-card-wrapper d-flex flex-column justify-content-center align-items-center">
      <div
        className="d-flex flex-row justify-content-between align-items-start"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <h3
          style={{
            color: color,
            fontSize: windowWidth < 1400 && windowWidth > 768 ? "22px" : "20px",
            lineHeight: "auto",
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
      {expand ? (
        <div
          style={{
            marginTop: "10px",
            color: "#6F6C90",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "30px",
          }}
        >
          {body}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
