import Item from "./Item";
import css from "./FoodItems.module.css";

function FoodItems(props) {
  return (
    <>
      <ul className={css.container}>
        {props.foodItems.map((item, index) => (
          <Item
            key={index}
            item={item}
            handleOrderButton={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
