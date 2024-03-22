import React, { useState } from "react";
import style from "./App.module.css";
import Display from "./component/display";
import Buttons from "./component/Buttons";

function App() {
  const [displayValue, setDisplayValue] = useState("");

  function clickHandleButton(value) {
    if (value === "C") {
      setDisplayValue("");
    } else if (value === "=") {
      let finalAns = eval(displayValue);
      setDisplayValue(finalAns);
    } else {
      let newValue = displayValue + value;
      setDisplayValue(newValue);
    }
  }

  return (
    <div className={style.container}>
      {/* Removed the unnecessary fragment */}
      <div className={style.box}>
        <Display value={displayValue} />
        {/* Passed 'oldValue' to the Display component */}
        <div className={style.buttonsContainer}>
          <Buttons clickHandleButton={clickHandleButton} />
        </div>
      </div>
    </div>
  );
}

export default App;
