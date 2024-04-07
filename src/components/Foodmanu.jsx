import React, { useState } from "react";
import "./Foodmanu.css";

const Foodmanu = () => {
  const [manubar, setManubar] = useState(false);

  const handleClose = () => {
    setManubar(false);
  };

  return (
    <>
      <div>
        <div className="foodm">
          <button onClick={() => setManubar(!manubar)}>Food-Manu</button>
        </div>
      </div>
      <div className={manubar ? "bodymanu show" : "bodymanu"}>
        <button className="zero" onClick={handleClose}>&times;</button>
        
      </div>
    </>
  );
};  

export default Foodmanu;
