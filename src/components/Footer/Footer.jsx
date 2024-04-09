import React from "react";
import "../Footer/Footer.css";
import icon from "../../assets/White_Logo.png";

export default function Footer({ windowWidth }) {
  return (
    <div className="footer-container">
      <footer
        id="contact"
        className="px-3 d-flex flex-column align-items-center justify-content-center"
      >
        <div
          className="row content-ro justify-content-between"
          style={{ width: "100%" }}
        >
          <div
            className="col-lg-3 col-md-12 footer-form"
            style={{ gap: "20px" }}
          >
            <img src={icon} />
            <p>
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div className="col-lg-3 col-md-12 d-flex flex-column footer-links">
            <h2>Our Technologies</h2>
            <ul className="m-0 p-0 d-flex flex-column">
              <li>ReactJs</li>
              <li>Gatsby</li>
              <li>NextJs</li>
              <li>NodeJs</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 d-flex flex-column footer-links">
            <h2>Our Services</h2>
            <ul className="m-0 p-0 d-flex flex-column">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
        <div
          className="footer-policy d-flex align-items-center justify-content-center"
          style={{
            width: windowWidth < 1400 && windowWidth > 768 ? "630px" : "335px",
          }}
        >
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p>Privacy Policy</p>
            <span className="m-0"></span>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
