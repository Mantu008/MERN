import { useContext } from "react";
import NoteContext from "../context/noteContext";

const CounterButton = () => {
  const { incrimentCounter } = useContext(NoteContext);

  function handleClick() {
    incrimentCounter(); // Corrected: Call the function
  }

  return (
    <div>
      <button onClick={handleClick}>Counter Button</button>
    </div>
  );
};

export default CounterButton;
