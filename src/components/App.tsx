import React, { useState } from "react";
import isNumberEven from "../utils/isNumberEven";

import "./App.css";

const App = () => {
  const regexp = /^[0-9\.\-\/]+$/;
  const [value, setValue] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event: any) => {
    let number = event.target.value;
    if (number === "" || regexp.test(number)) {
      const size = number.length - 1;
      if (size === 0 || number.charAt(size) !== "-") {
        setValue(event.target.value);
      }
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (value !== "") {
      setNumber(value);
    }
  };

  const renderNumber = () => {
    if (number) {
      const isEven = isNumberEven(number);
      return number !== "" ? (
        <div>
          <h4>
            Last time we checked, the number {number} was {isEven}.
          </h4>
        </div>
      ) : null;
    }
  };

  return (
    <div className="ui container">
      <div className="app">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Enter a number to check if its odd or even</h3>
          </div>
          <div>
            <label>
              <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Send" />
          </div>
        </form>
        {renderNumber()}
      </div>
    </div>
  );
};

export default App;
