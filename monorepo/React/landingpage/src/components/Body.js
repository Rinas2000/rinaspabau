import React from "react";

const Body = ({ options, onSelect }) => {
  return (
    <div>
      {options.map((option, index) => (
        <div className="mb-2" key={index} onClick={() => onSelect(option)}>
          {option.content}
        </div>
      ))}
    </div>
  );
};

export default Body;
