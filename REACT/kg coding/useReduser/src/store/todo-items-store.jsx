import { useReducer } from "react";
import { createContext } from "react";
export const TodoItemsContext = createContext([
  {
    todoitems: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);

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

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        todo: action.paylod.todoInputValue,
        date: action.paylod.dateInputValue,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.todo != action.paylod.itemName
    );
  }

  return newTodoItems;
};

const todoItemsContextProvider = ({ children }) => {
  const [todoitems, dispatchTodo] = useReducer(
    todoItemReducer,
    initialTodoitems
  );

  const addNewItem = () => {
    // add new data into our toodioList
    const todoInputValue = document.getElementById("todoInput").value;
    const dateInputValue = document.getElementById("dateInput").value;
    if (todoInputValue !== "" && dateInputValue !== "") {
      const newItemAction = {
        type: "NEW_ITEM",
        paylod: {
          todoInputValue,
          dateInputValue,
        },
      };

      dispatchTodo(newItemAction);

      //after adding value input field will be empty

      document.getElementById("todoInput").value = "";
      document.getElementById("dateInput").value = "";
    }
  };

  function deleteItem(todoItemName) {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      paylod: {
        itemName: todoItemName,
      },
    };

    dispatchTodo(deleteItemAction);
  }

  return (
    <TodoItemsContext.Provider
      value={{
        todoitems: todoitems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default todoItemsContextProvider;
