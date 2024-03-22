import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NoteState from "./context/NoteState";
import About from "./component/About";
import ShowCount from "./component/ShowCount";
import CounterButton from "./component/CounterButton";

function App() {
  return (
    <>
      <NoteState>
        <About />
        <ShowCount />
        <CounterButton />
      </NoteState>
    </>
  );
}

export default App;
