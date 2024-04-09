import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Service from "./components/Service/Service";
import Footer from "./components/Footer/Footer";

function App() {
  const [windowWidth, setWindowWidth] = useState(1400);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <div className="App container-fluid">
          <Header windowWidth={windowWidth} />
          <Intro windowWidth={windowWidth} />
          {windowWidth <= 768 ? (
            <div
              className="intro-desc mb-3 d-flex flex-column align-items-start justify-content-center"
              style={{ width: "100%", height: "auto" }}
            >
              <h1>
                We crush your competitors, goals, and sales records - without
                the B.S.
              </h1>
              <button>GET FREE CONSULTATION</button>
            </div>
          ) : (
            <></>
          )}
          <Service windowWidth={windowWidth} />
          <Footer windowWidth={windowWidth} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
