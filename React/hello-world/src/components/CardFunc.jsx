import React, { useState } from "react";

const CardFunc = () => {
  const [age, setAge] = useState(0);

  const updateAge = (inputAge) => {
    setAge(inputAge);
  };
  return (
    <div>
      <label>Enter Your Age :- </label>
      <input
        onChange={(event) => {
          updateAge(event.target.value);
        }}
        value={age}
        type="number"
      />
      <h1>Your Age is {age}</h1>
      {age === 0 && <h3>You are not yet born</h3>}
      {age > 0 && age <= 12 && <h3>You are child enjoy</h3>}
      {age > 12 && age < 19 && <h3>You are teenager learn from mistakes</h3>}
      {age > 19 && age < 110 && <h3>You are an Adult</h3>}
      {age > 110 && <h3>Invalid Age</h3>}
    </div>
  );
};

export default CardFunc;
