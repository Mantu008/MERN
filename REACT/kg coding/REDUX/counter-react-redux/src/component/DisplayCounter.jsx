import { useSelector } from "react-redux";
function DisplayCounter() {
  const counter = useSelector((store) => store.counter);
  return (
    <div>
      <h1 className="lead mb-4">Counter Current value - {counter}</h1>
    </div>
  );
}

export default DisplayCounter;
