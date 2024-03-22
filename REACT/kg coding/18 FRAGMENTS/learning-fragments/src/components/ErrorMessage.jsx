import css from "./ErrorMessage.module.css";
function ErrorMessage(props) {
  return (
    <>
      {/* /* turnury operator */}
      {props.foodItems.length == 0 ? (
        <h3>I am Hungry</h3>
      ) : (
        <h3>Food is Present</h3>
      )}
      {/* /* conditional operator*/}
      {props.foodItems.length === 0 && <h3>I am still Hungry</h3>}
    </>
  );
}

export default ErrorMessage;
