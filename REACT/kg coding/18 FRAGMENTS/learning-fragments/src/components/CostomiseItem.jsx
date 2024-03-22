import css from "./CostomiseItem.module.css";
function CostomiseItem({ handleOnChenge, handleOnclickOrder }) {
  function handleButtonClicked(costumItem) {
    if (costumItem !== "") {
      console.log(
        `wait your order is in progress and you are order ${costumItem}`
      );
    }
  }

  return (
    <div className={css.box}>
      <input
        className={css.Input}
        id="input"
        type="text"
        placeholder="Enter Your Costomise item"
        onChange={handleOnChenge}
      />
      <button
        type="button"
        className={`${css.button} btn btn-warning`}
        onClick={(event) => {
          handleButtonClicked(document.querySelector("#input").value);
          handleOnclickOrder(document.querySelector("#input").value);
        }}
      >
        Order
      </button>
    </div>
  );
}

export default CostomiseItem;
