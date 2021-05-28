import React from "react";
import "./styles.css";

const App = () => {
  interface Os {
    name: string;
    language: string;
  }

  const desert = (type: Os): string => {
    return "Android " + type.name + " has " + type.language;
  };

  const nougat = {
    name: "N",
    language: "Java"
  };

  return (
    <div className="App">
      <span>{desert(nougat)}</span>
    </div>
  );
};

export default App;
