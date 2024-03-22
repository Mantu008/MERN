import React from "react";
import { memo } from "react";

function ChildA({ learning }) {
  console.log("child component");
  return <div></div>;
}

export default memo(ChildA);
