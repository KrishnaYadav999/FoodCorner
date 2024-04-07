import React, { useState } from "react";
import "./Contants.css";
import { image } from "./data/image";
import Filter from "./Filter";

const Contants = () => {
  const [filteredData, setFilteredData] = useState(image);

  const handleCategorySelect = (category) => {
    const filtered = category === "All" ? image : image.filter(item => item.categories === category);
    setFilteredData(filtered);
  };

  return (
    <>
      <Filter onSelectCategory={handleCategorySelect} />
      {filteredData.map((item, index) => (
        <div className="main" key={index}>
          <div className="image">
            <img className="imagefood" src={item.img} alt="food item" />
          </div>
          <hr />
          <div className="fix">
            <div>
              <h2 style={{fontSize:'20px'}}>{item.title}</h2>
            </div>
            <div>
              <p>&#10026; {item.rating} - {item.categories}</p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
          <button className="btn-o">Order</button>
        </div>
      ))}
    </>
  );
};

export default Contants;
