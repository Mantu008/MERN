import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import style from "./App.module.css";
import Display from "./component/display";
import Buttons from "./component/Buttons";
function App() {
  return (
    <>
      <div className="container">
        <div className={style.box}>
          <Display></Display>
          <div className={style.buttonsContainer}>
            <Buttons></Buttons>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
