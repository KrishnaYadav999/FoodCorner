import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contants from './components/Contants';
import Adds from "./components/Adds";
import Foodmanu from "./components/Foodmanu";
import Mind from "./components/Mind";

const App = () => {
  return (
    <>
      <Foodmanu/>
      <Navbar />
      <Adds />
      <Mind />
      <Contants />
      <Footer />
    </>
  );
};

export default App;
