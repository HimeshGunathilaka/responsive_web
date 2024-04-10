import React, { useEffect, useState } from "react";
import "../Service/Service.css";
import icon_1 from "../../assets/image_2.png";
import icon_2 from "../../assets/image_1.png";
import QuestionCard from "../QuestionCard/QuestionCard";

export default function Service({ windowWidth }) {
  const questions = [
    {
      title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      title:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      body: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
  ];
  return (
    <div
      id="services"
      className="service-container d-flex flex-column justify-content-center align-items-center px-4"
    >
      <div className="service-card d-flex justify-content-center align-items-center">
        {windowWidth < 768 ? (
          <div
            className="d-flex flex-column"
            style={{ width: "335px", height: "auto" }}
          >
            <img src={icon_1} />
            <div className="d-flex flex-column service-desc justify-content-center align-items-center">
              <h3 className="text-center">Web & Mobile App Development</h3>
              <p className="text-center">
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        ) : (
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{
              height:
                windowWidth < 1400 && windowWidth > 1200
                  ? "414px"
                  : windowWidth <= 1200 && windowWidth > 768
                  ? "346px"
                  : "275px",
              width:
                windowWidth < 1400 && windowWidth > 1200
                  ? "1064px"
                  : windowWidth <= 1200 && windowWidth > 1000
                  ? "896px"
                  : // : windowWidth <= 1200 && windowWidth > 768
                    // ? "896px"
                    "688px",
            }}
          >
            <img
              src={icon_1}
              style={{
                height:
                  windowWidth < 1400 && windowWidth > 1200
                    ? "414px"
                    : windowWidth <= 1200 && windowWidth > 768
                    ? "346px"
                    : "275px",
              }}
            />
            <div className="d-flex flex-column service-desc justify-content-center align-items-start">
              <h3>Web & Mobile App Development</h3>
              <p>
                Your web and mobile Apps are pieces of the puzzle to grow your
                business. We use frameworks which tailor content and engagement
                methods to respond to different intents shown by your potential
                customers who interact with your business online.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        )}
      </div>

      <div className="service-card d-flex justify-content-center align-items-center">
        {windowWidth < 768 ? (
          <div
            className="d-flex flex-column"
            style={{ width: "335px", height: "auto" }}
          >
            <img src={icon_2} />
            <div className="d-flex flex-column service-desc justify-content-center align-items-center">
              <h3 className="text-center">Digital Strategy Consulting</h3>
              <p className="text-center">
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <button>LEARN MORE</button>
            </div>
          </div>
        ) : (
          <div
            className="d-flex flex-row justify-content-center align-items-center"
            style={{
              height:
                windowWidth < 1400 && windowWidth > 1200
                  ? "414px"
                  : windowWidth <= 1200 && windowWidth > 768
                  ? "346px"
                  : "275px",
              width:
                windowWidth < 1400 && windowWidth > 1200
                  ? "1064px"
                  : windowWidth <= 1200 && windowWidth > 1000
                  ? "896px"
                  : "688px",
            }}
          >
            <div className="d-flex col flex-column service-desc justify-content-center align-items-start">
              <h3>Digital Strategy Consulting</h3>
              <p>
                Your digital strategy should complement the overall marketing
                strategy of the company. In online marketing, each component
                will never work in isolation and every business needs a
                different mix. We provide a clear concept and strategic overview
                to find the most efficient model for your business.
              </p>
              <button>LEARN MORE</button>
            </div>
            <img src={icon_2} className="col" />
          </div>
        )}
      </div>

      <div
        style={{
          width:
            windowWidth < 1400 && windowWidth > 1200
              ? "846px"
              : windowWidth <= 1200 && windowWidth > 1000
              ? "896px"
              : windowWidth <= 1000 && windowWidth > 768
              ? "686px"
              : "334px",
          height: "auto",
        }}
        className="question-container d-flex flex-column justify-content-center align-items-center"
      >
        <h3 className="text-center">Frequently asked questions</h3>
        {questions.map((item) => {
          return (
            <QuestionCard
              title={item.title}
              body={item.body}
              windowWidth={windowWidth}
            />
          );
        })}
      </div>
    </div>
  );
}
