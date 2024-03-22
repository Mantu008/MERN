import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import css from "./AddItem.module.css";
import { MdDelete } from "react-icons/md";
function AddItem({ todoName, tododate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-6">
          <h5>{todoName}</h5>
        </div>
        <div className="col-sm-4">
          <h5>{tododate}</h5>
        </div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItem(todoName)}
          >
            {/* add Delete button  */}
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
