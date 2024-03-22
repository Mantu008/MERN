import React, { useState } from "react";
import style from "../component/Display.module.css";

function Display({ value }) {
  return <input id={style.display} type="text" value={value} readOnly />;
}

export default Display;
