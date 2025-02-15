import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
function App() {
  const initialTodoitems = [
    {
      todo: "Buy Milk",
      date: "4/10/2023",
    },
    {
      todo: "Go to College",
      date: "4/10/2023",
    },
    {
      todo: "Go to Market",
      date: "8/12/2023",
    },
    {
      todo: "Go to Coaching",
      date: "8/12/2023",
    },
  ];

  const [todoitems, setTodoItem] = useState(initialTodoitems);

  const handleAddButtonClick = () => {
    // add new data into our toodioList
    const todoInputValue = document.getElementById("todoInput").value;
    const dateInputValue = document.getElementById("dateInput").value;
    if (todoInputValue !== "" && dateInputValue !== "") {
      let newTodoItems = [
        ...todoitems,
        { todo: todoInputValue, date: dateInputValue },
      ];

      //after adding value input field will be empty

      setTodoItem(newTodoItems);
      document.getElementById("todoInput").value = "";
      document.getElementById("dateInput").value = "";
    }
  };

  function handleClickedDeleteButton(todoItemName) {
    const newTodoItems = todoitems.filter((item) => item.todo != todoItemName);
    setTodoItem(newTodoItems);
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo handleAddButtonClick={handleAddButtonClick} />

        {todoitems.length === 0 && <WelcomeMessage></WelcomeMessage>}

        {/* //add item  using probs */}
        <AddItems
          todoitems={todoitems}
          handleClickedDeleteButton={handleClickedDeleteButton}
        ></AddItems>
      </center>
    </>
  );
}

export default App;
