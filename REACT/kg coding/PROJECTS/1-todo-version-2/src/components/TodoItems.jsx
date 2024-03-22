import AddItems from "./AddItems";
function TodoItems({ todoitems }) {
  return (
    <>
      {todoitems.map((item, index) => (
        <AddItems
          key={index}
          todoName={item.todo}
          updatedate={item.date}
        ></AddItems>
      ))}
    </>
  );
}

export default TodoItems;
