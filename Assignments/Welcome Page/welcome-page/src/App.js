import React, { useState } from "react";
import GreetingMessage from "./components/GreetingMessage";
import "./App.css";
import Login from "./components/Login";

const App = () => {
  const [isInputTaken, setIsInputTaken] = useState(false);
  const [name, setName] = useState("");

  const handleClick = () => {
    if (name !== null && name !== "") setIsInputTaken(true);
    else {
      setIsInputTaken(false);
      alert("Please enter name before login!");
    }
  };
  return (
    <div>
      {isInputTaken ? (
        <>
          <div className="greeting-container">
            <GreetingMessage name={name} />
            <h2>Welcome to LPU</h2>
            <button onClick={() => setIsInputTaken(false)}>Go Back</button>
          </div>
        </>
      ) : (
        <Login name={name} handleClick={handleClick} setName={setName} />
      )}
      <p style={{ textAlign: "center" }}>
        Assignment Done By <strong>Vijay Kumar Yadav 12020077</strong>{" "}
      </p>
    </div>
  );
};

export default App;
