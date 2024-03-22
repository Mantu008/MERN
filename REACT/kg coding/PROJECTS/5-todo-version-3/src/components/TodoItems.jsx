import AddItems from "./AddItems";
function TodoItems({ todoitems, handleClickedDeleteButton }) {
  return (
    <>
      {todoitems.map((item, index) => (
        <AddItems
          key={index}
          todoName={item.todo}
          tododate={item.date}
          handleClickedDeleteButton={handleClickedDeleteButton}
        ></AddItems>
      ))}
    </>
  );
}

export default TodoItems;
