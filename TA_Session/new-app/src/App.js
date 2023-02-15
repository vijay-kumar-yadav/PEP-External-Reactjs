import React, { useState } from "react";
export default function App() {
  const [state, setState] = useState({ name: "React", count: 0 });
  const increment = () => {
    setState({ ...state, count: state.count + 1 });
  };
  return (
    <div>
      <p>The count is {state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
