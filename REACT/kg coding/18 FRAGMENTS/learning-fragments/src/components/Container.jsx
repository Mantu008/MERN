import style from "./Container.module.css";

function Container(props) {
  return <div className={style.box}>{props.children}</div>;
}

export default Container;
