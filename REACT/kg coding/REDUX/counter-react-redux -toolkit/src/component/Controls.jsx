import { useRef } from "react";

import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyAction } from "../store/privacy";

function Controls() {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDicrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    if (inputElement.current.value.length !== 0) {
      dispatch(
        counterActions.add({
          num: Number(inputElement.current.value),
        })
      );
      inputElement.current.value = "";
    }
  };

  const handleSubtract = () => {
    if (inputElement.current.value.length !== 0) {
      dispatch(
        counterActions.subtract({
          num: Number(inputElement.current.value),
        })
      );
      inputElement.current.value = "";
    }
  };

  const handlePrivicyToggle = () => {
    dispatch(privacyAction.privacyTogler());
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
