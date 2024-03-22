import { useState } from "react";
import css from "./App.module.css";
import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import CustomiseItem from "../src/components/CostomiseItem";

function App() {
  let initialText = "Enter Your Custom State";
  let [textToShow, setTextState] = useState(initialText);

  function handleOnChenge(event) {
    setTextState(event.target.value);
  }

  let [foodItems, setFoodItems] = useState([]);

  function handleOnclickOrder(customFood) {
    if (customFood !== "") {
      setFoodItems([...foodItems, customFood]);
      document.querySelector("#input").value = "";
    }
  }

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>

        <ErrorMessage foodItems={foodItems} />

        <CustomiseItem
          handleOnChenge={handleOnChenge}
          handleOnclickOrder={handleOnclickOrder}
        />

        <p className={css.foodItem}>{textToShow}</p>

        <FoodItems foodItems={foodItems} />
      </Container>

      <Container>
        <h4>It is a list of healthy foods for all age group people</h4>
      </Container>
    </>
  );
}

export default App;
