import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = ({ children }) => {
  const state = {
    name: "mantu",
    id: 1,
  };

  const [count, setCount] = useState(100);

  const incrimentCounter = () => {
    setCount(count + 1);
  };

  return (
    <NoteContext.Provider value={{ state, count, incrimentCounter }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
