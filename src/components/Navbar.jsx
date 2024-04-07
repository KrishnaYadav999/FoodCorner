  import React, { useState } from "react";
  import "./Navbar.css";

  const Navbar = () => {
    const [bar, setBar] = useState(false)
    return (
      <>
        <nav>
          <div>
            <h3 className="logo">
              Food<span className="go">corner</span>
            </h3>
          </div>
          {/* <div className="nav-flixt">
            <input type="text" placeholder="search" className="ser" />
            <button className="btn">Search</button>
          </div> */}
          <div>
            <ul style={{marginLeft:'51vw'}}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <button className="sing">SingIn</button>
          </div>
          <div className="">
            <button className="manu-btn" onClick={()=>setBar(!bar)}>
              {(bar) ?<span>&times;</span> : <span>&#9776;</span> }
            </button>
            <div className={`slow ${bar ? 'display' : ''}`}>
            <ul className="ulshow">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            </div>
          </div>
        </nav>
      </>
    );
  };

  export default Navbar;
