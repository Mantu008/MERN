import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItem from "./components/addItem";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        {/* //add item  using probs */}

        <AddItem
          todo="Buy Milk"
          date="4/10/2023"
          btnclstype="btn btn-danger"
          btntext="Delete"
        />

        <AddItem
          todo="Go to College"
          date="4/10/2023"
          btnclstype="btn btn-danger"
          btntext="Delete"
        />
      </center>
    </>
  );
}

export default App;
