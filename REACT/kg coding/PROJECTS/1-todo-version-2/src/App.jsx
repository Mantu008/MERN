import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoitems = [
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
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        {/* //add item  using probs */}
        <AddItems todoitems={todoitems}></AddItems>
      </center>
    </>
  );
}

export default App;
