import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./component/useCounter";

function App() {
  const [increment, decrement, count] = useCounter();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button> <br /> <br />
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
