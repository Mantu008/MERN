import css from "./AddItem.module.css";
function AddItem(props) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm-6">
          <h5>{props.todoName}</h5>
        </div>
        <div className="col-sm-4">
          <h5>{props.updatedate}</h5>
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
