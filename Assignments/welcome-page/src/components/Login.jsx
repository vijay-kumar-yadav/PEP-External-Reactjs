import React from "react";

const Login = (Props) => {
  return (
    <div className="login-container">
      <p>Enter Name</p>
      <div>
        <input
          value={Props.name}
          placeholder="your name here..."
          onChange={(event) => Props.setName(event.target.value)}
        />
        <button onClick={Props.handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
