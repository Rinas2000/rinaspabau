import React from "react";

const Header = ({ step }) => {
  return (
    <div className="header col-12 text-center">
      <h4>Choose Service</h4>
      <p>Step {step}</p>
    </div>
  );
};

export default Header;
