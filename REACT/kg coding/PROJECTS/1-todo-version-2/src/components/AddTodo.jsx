import React, { useState } from "react";
import css from "./AddTodo.module.css";

function AddTodo() {
  return (
    <div className={`container text-center ${css.container}`}>
      <div className="row">
        <div className="col-sm-6">
          <input type="text" placeholder="Enter Todo here" id="todoInput" />
        </div>
        <div className="col-sm-4">
          <input type="date" id="dateInput" />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
