import { useContext } from "react";
import style from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {
  const { todoitems } = useContext(TodoItemsContext);

  return (
    todoitems.length === 0 && (
      <p className={style.welcome}>Welcome! Enjoy Your Day</p>
    )
  );
}

export default WelcomeMessage;
