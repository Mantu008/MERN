import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import AddItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <center className="todo-container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <AddItems />
        </center>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;
