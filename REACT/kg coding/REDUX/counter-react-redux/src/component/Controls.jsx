import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const inputElement = useRef();

  const dispatch = useDispatch();

  const INCREMENT = {
    type: "INCREMENT",
  };

  const DECREMENT = {
    type: "DECREMENT",
  };

  const handleIncrement = () => {
    dispatch(INCREMENT);
  };

  const handleDicrement = () => {
    dispatch(DECREMENT);
  };

  const handleAdd = () => {
    const num = parseInt(inputElement.current.value);
    if (!isNaN(num)) {
      dispatch({
        type: "ADD",
        payload: {
          num,
        },
      });
    }
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    const num = parseInt(inputElement.current.value);
    if (!isNaN(num)) {
      dispatch({
        type: "SUBTRACT",
        payload: {
          num,
        },
      });
    }
    inputElement.current.value = "";
  };

  const handlePrivicyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-success btn-lg px-4 active"
          onClick={handleDicrement}
        >
          -1
        </button>

        <button
          type="button"
          className="btn btn-outline-warning btn-lg px-4 active"
          onClick={handlePrivicyToggle}
        >
          Peivacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center inputdiv">
        <input type="text" placeholder="Enter Number" ref={inputElement} />
        <button
          type="button"
          className="btn btn-outline-info btn-lg px-4 active"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4 active"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
