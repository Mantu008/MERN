import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    alert(count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
}

export default Counter;
