import React, { useRef } from "react";
import css from "./AddTodo.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ handleAddButtonClick }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  function prinUsinguseRef() {
    let todoName = todoNameElement.current.value;
    let dueDate = dueDateElement.current.value;
    console.log(todoName + " " + dueDate);
  }

  return (
    <div className={`container text-center ${css.container}`}>
      <div className="row">
        <div className="col-sm-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            id="todoInput"
            ref={todoNameElement}
          />
        </div>
        <div className="col-sm-4">
          <input type="date" id="dateInput" ref={dueDateElement} />
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              prinUsinguseRef();
              handleAddButtonClick();
            }}
          >
            {/* addButton */}
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
