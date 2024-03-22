import { useEffect, useState } from "react";

function Data() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h3>This is the Clock that Shows the Time in Bharat at all times</h3>

      <h3>
        This is the Current time :{time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </h3>
    </>
  );
}

export default Data;
