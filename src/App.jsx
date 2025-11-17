import styles from "./App.module.css";
import Calbtn from "./components/CalBtn";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal.replace("x", "*"));
      setCalVal(result.toString());
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <Calbtn onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
