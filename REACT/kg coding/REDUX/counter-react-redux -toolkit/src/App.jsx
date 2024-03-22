import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hadder from "./component/Hadder";
import DisplayCounter from "./component/DisplayCounter";
import Container from "./component/Container";
import Controls from "./component/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./component/PrivacyMessage";

function App() {
  const { currState } = useSelector((store) => store.privacy);
  return (
    <center className="col-lg-6 mx-auto">
      <Container>
        <Hadder />
        {currState ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls />
      </Container>
    </center>
  );
}

export default App;
