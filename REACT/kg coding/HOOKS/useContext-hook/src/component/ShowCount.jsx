import { useContext } from "react";
import NoteContext from "../context/noteContext";
const ShowCount = () => {
  const { count } = useContext(NoteContext);
  return <div>the current count is : {count}</div>;
};

export default ShowCount;
