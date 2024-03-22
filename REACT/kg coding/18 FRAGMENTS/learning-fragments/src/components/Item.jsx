import css from "./Item.module.css";
function Item(props) {
  const handleButtonClicked = (foodItem, event) => {
    console.log(event);
    alert(`wait your order is in progress and you are order ${foodItem}`);
  };

  return (
    <>
      <li className={`list-group-item ${css.FoodItem} `}>
        {props.item}
        <button
          type="button"
          className={`${css.button} btn btn-warning`}
          onClick={(event) => {
            handleButtonClicked(props.item, event);

            //both are diff methods..
            //it call the method of parent
            props.handleOrderButton();
          }}
        >
          Order
        </button>
      </li>
    </>
  );
}

export default Item;
