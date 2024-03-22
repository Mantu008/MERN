function TodoItem(props) {
  const itemClass = `TodoItem ${props.task.completed ? "Completed" : ""}`;
  return (
    <div className={itemClass}>
      <h2>{props.task.title}</h2>
      <p>Completed {props.task.completed ? "Yes" : "No"}</p>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={props.onComplete}>Complete</button>
    </div>
  );
}
export default TodoItem;
