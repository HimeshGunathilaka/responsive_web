import React, { useEffect, useState } from "react";
import Icon from "../../assets/White_Logo.png";
import "../Header/Header.css";
import { List, X } from "react-bootstrap-icons";

export default function Header({ windowWidth }) {
  const [open, setOpen] = useState(false);
  const handleOpen = (value) => {
    setOpen(value);
  };
  return (
    <>
      {open ? (
        <div className="menu-container d-flex flex-column">
          <X
            style={{
              width: "36.11px",
              height: "36.11px",
              position: "fixed",
              right: "20px",
              top: "16px",
              cursor: "pointer",
            }}
            onClick={() => handleOpen(false)}
          />
          <ul
            className="d-flex flex-column"
            style={{ gap: "28px", height: "auto" }}
            onClick={() => handleOpen(false)}
          >
            <a href="#services">
              <li>SERVICES</li>
            </a>
            <a href="#about">
              <li>ABOUT US</li>
            </a>
            <a>
              <li>CONTACT US</li>
            </a>
            <a>
              <li>CAREERS</li>
            </a>
          </ul>
        </div>
      ) : (
        <></>
      )}
      <div className="navbar-container d-flex align-items-center">
        <div className="d-flex flex-row px-3 navbar-wrapper justify-content-between align-items-center">
          <img
            src={Icon}
            style={{ width: "238.89px", height: "36.11px" }}
            className="brand-icon"
            alt="brand"
          />
          {windowWidth <= 768 ? (
            <List
              style={{ width: "36.11px", height: "36.11px", cursor: "pointer" }}
              onClick={() => handleOpen(true)}
            />
          ) : (
            <ul
              className="d-flex flex-row"
              style={{ gap: "28px", height: "17px" }}
            >
              <a href="#services">
                <li>SERVICES</li>
              </a>
              <a href="#about">
                <li>ABOUT US</li>
              </a>
              <a>
                <li>CONTACT US</li>
              </a>
              <a>
                <li>CAREERS</li>
              </a>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
