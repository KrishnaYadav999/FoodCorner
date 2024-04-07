import React from "react";
import "./Mind.css";
import { allcat } from "./data/whatonyourmind";

const Mind = () => (
  <div className="scroll-container" id="scroll-container">
    {allcat.map((allm, i) => (
      <div className="parent" key={i}>
        <div className="mind-main">
          <img className="imagess" src={allm.img} alt="category"></img>
          <p className="para">{allm.path}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Mind;

let What = ({ img }) => {
  return (
    <>
      <div className="parant">
        <div className="mind-main">
          <img  src={img} alt="category"></img>
          <p>{img}</p>
        </div>
      </div>
    </>
  );
};

export { allcat };
