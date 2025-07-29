import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      if (!expression) {
        setResult("Error");
        return;
      }
      try {
        let result;
        if (expression.includes("/ 0")) {
          if (expression === "0 / 0") {
            result = "NaN"; // Handle 0 divided by 0
          } else {
            result = "Infinity"; // Handle division by 0
          }
        } else {
          result = eval(expression);
        }
        setResult(result);
      } catch (error) {
        setResult("Error");
      }
      setExpression("");
    } else if (value === "C") {
      setExpression("");
      setResult("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "C", 0, "=", "+"].map(
          (value, index) => (
            <button key={index} onClick={() => handleClick(value)}>
              {value}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Calculator;