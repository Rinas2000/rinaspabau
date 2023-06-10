import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import harmonyca from "./assets/images/harmonyca.jpg";
import dermal from "./assets/images/dermal.jpg";
import secretrf from "./assets/images/secretrf.jpg";
import botox from "./assets/images/botox.png";

const options = [
  {
    title: "Anti Wrinkle Treatment",
    content: (
      <div className="option">
        <img src={botox} alt="Image" width="40px" />
        <a className="option-a ms-2">Anti Wrinkle&nbsp;Treatment</a>
      </div>
    ),
  },
  {
    title: "Dermal Filler",
    content: (
      <div className="option">
        <img src={dermal} alt="Image" width="40px" />
        <a className="option-a ms-2">Dermal&nbsp;Filler</a>
      </div>
    ),
  },
  {
    title: "Secret RF",
    content: (
      <div className="option">
        <img src={secretrf} alt="Image" width="40px" />
        <a className="option-a ms-2">Secret&nbsp;RF</a>
      </div>
    ),
  },
  {
    title: "HarmonyCA",
    content: (
      <div className="option">
        <img src={harmonyca} alt="Image" width="40px" />
        <a className="option-a ms-2">HarmonyCA</a>
      </div>
    ),
  },
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  const showBackButton = Boolean(selectedOption);

  return (
    <div className="content">
      <div className="header">
        <Header step={showBackButton ? "2/2" : "1/2"} />
      </div>
      <div className="body d-flex flex-column align-items-center">
        <div className="card">
          {selectedOption ? (
            <div>{selectedOption.content}</div>
          ) : (
            <Body options={options} onSelect={handleOptionSelect} />
          )}
        </div>
        <div className="mt-3">
          <Footer onBack={handleBack} showBackButton={showBackButton} />
        </div>
      </div>
    </div>
  );
};

export default App;
