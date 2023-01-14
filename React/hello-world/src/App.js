import { useState } from "react";
import "./App.css";
// import CardClass from "./components/CardClass";
// import CardFunc from "./components/CardFunc";
import Cards from "./components/StyledComponent/Cards";

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);
  const activateTheme = () => {
    setIsDarkModeActive(!isDarkModeActive);
    console.log(isDarkModeActive);
  };
  return (
    <div>
      <button onClick={() => activateTheme()}>
        {!isDarkModeActive ? "Dark" : "Light"}
      </button>
      <Cards isDarkModeActive={isDarkModeActive} />
    </div>
  );
}

export default App;
