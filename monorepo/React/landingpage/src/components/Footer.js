import React from "react";

const Footer = ({ onBack, showBackButton }) => {
  return (
    <div className="footer">
      <p>
        Not sure about consullation type? Please, call{" "}
        <a href="#">0203 797063</a>
      </p>
      {showBackButton && (
        <button className="btn btn-primary" onClick={onBack}>
          Back
        </button>
      )}
    </div>
  );
};

export default Footer;
