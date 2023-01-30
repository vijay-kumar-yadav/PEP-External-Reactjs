import React from "react";
import Cards from "./components/Cards/Cards";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Cards />
    </div>
  );
};

export default App;
