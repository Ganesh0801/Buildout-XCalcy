import React from 'react'
import styles from "./Calculator.module.css"
import "../App.css"
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState(0);
  const [btnClicked, setBtnClicked] = useState(false);

  const handleButtonClick = (value) => {
    setValue(prevExpression => prevExpression + value);
  };
  
  const reset = () => {
    setValue("");
     setBtnClicked(false);
    setRes(0);
  };
  const calculate = () => {
    setBtnClicked(true);
    try {
      setRes(eval(value));
    } catch (error) {
      setRes("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input value={value} type="text" />
      {btnClicked === true && value === "" && <p>Error</p>}
      {res !== 0 && <p style={{fontSize:"20px",fontFamily:"sans-serif",color:"gray",opacity:"0.8"}}>{res}</p>}
      <br />
      <div className={styles.btnParent}>
      {[7, 8, 9, '+'].map(num =>
          <button key={num} className={styles.btn} onClick={() => handleButtonClick(num)}>{num}</button>
        )}
      <br />
      {[4, 5, 6, '-'].map(num =>
          <button key={num} className={styles.btn} onClick={() => handleButtonClick(num)}>{num}</button>
        )}
      <br />
      {[1, 2, 3, '*'].map(num =>
          <button key={num} className={styles.btn} onClick={() => handleButtonClick(num)}>{num}</button>
        )}
      <br />
      <button className={styles.btn} onClick={reset}>C</button>
        <button className={styles.btn} onClick={() => handleButtonClick(0)}>0</button>
        <button className={styles.btn} onClick={calculate}>=</button>
        <button className={styles.btn} onClick={() => handleButtonClick('/')}>/</button>
    </div>
    </div>
  );
}

