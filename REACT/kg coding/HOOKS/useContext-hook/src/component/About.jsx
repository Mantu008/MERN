import { useContext } from "react";
import NoteContext from "../context/noteContext";

const About = () => {
  const { state } = useContext(NoteContext);

  return <div>{`this is about : ${state.name} which id is : ${state.id}`}</div>;
};

export default About;
