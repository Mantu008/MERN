import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import AddItems from "./AddItems";
function TodoItems() {
  const { todoitems } = useContext(TodoItemsContext);
  return (
    <>
      {todoitems.map((item, index) => (
        <AddItems
          key={index}
          todoName={item.todo}
          tododate={item.date}
        ></AddItems>
      ))}
    </>
  );
}

export default TodoItems;
