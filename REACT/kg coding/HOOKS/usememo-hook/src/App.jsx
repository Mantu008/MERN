import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("i am mantu");
      return add * 10;
    },
    [add]
  );

  return (
    <>
      <h1>Learning useMEmo</h1>
      <span>{multiplication}</span> <br /> <br />
      <button onClick={() => setAdd(add + 1)}>Addition</button>{" "}
      <span>{add}</span> <br /> <br />
      <button onClick={() => setMinus(minus - 1)}>minus</button>{" "}
      <span>{minus}</span>
    </>
  );
}

export default App;
