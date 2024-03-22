import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return [increment, decrement, count];
}

export default useCounter;
