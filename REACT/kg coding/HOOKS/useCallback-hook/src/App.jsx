import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./component/ChildA";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState(0);

  const learning = useCallback(() => {
    //some operation
  }, [value]);

  return (
    <>
      <div>
        <h1>Learning useCallback</h1>
        <ChildA learning={learning} />
        <h3>current addition: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Addition</button>
        <br /> <br />
        <h3>current count: {value}</h3>
        <button onClick={() => setValue(value + 1)}>Count</button>
      </div>
    </>
  );
}

export default App;
