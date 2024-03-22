import style from "../component/Buttons.module.css";
function Buttons() {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {buttonsName.map((buttonName) => (
        <button className={style.btn}>{buttonName}</button>
      ))}
    </>
  );
}

export default Buttons;
