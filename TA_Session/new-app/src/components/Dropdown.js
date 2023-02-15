import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [] = useState("Select");
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
          const renderedItem = options.map((data, index) => (
    <div
      onClick={() => {
        console.log(data.value);
        handleClick();
      }}
      key={index}
    >
      {data.label}
    </div>
  ));
  return (
    <div>
      <div onClick={handleClick}>Select</div>
      {isExpanded && <div>{renderedItem}</div>}
    </div>
  );
};

export default Dropdown;
