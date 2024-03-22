import { useState } from "react";
import TodoItem from "./TodoItem";
function TodoList() {
  const tasks = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Speaking English", completed: true },
    { id: 3, title: "C Programming", completed: true },
    { id: 4, title: "Python Programming", completed: false },
  ];

  const [todo, setTodo] = useState(tasks);
  const [inputValue, setInputValue] = useState("");

  const deleteTodo = (keyId) => {
    const newTodo = todo.filter((val) => val.id != keyId);
    setTodo(newTodo);
  };

  const markAsComplete = (keyId) => {
    const updatedTodo = todo.map((val) => {
      if (val.id == keyId) {
        return { ...val, completed: !val.completed };
      }
      return val;
    });
    setTodo(updatedTodo);
  };

  const addTodo = () => {
    const x = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    setTodo([...todo, x]);
    setInputValue("");
  };

  return (
    <div className="TodoList">
      <div className="inputContainer">
        <input
          type="text"
          value={inputValue}
          class="todoInput"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" class="addTodoButton" onClick={addTodo} />
      </div>

      {}

      {todo.map((row) => (
        <TodoItem
          task={row}
          onDelete={() => deleteTodo(row.id)}
          onComplete={() => markAsComplete(row.id)}
        />
      ))}
    </div>
  );
}
export default TodoList;
