import { useEffect, useRef, useState } from "react";
import { format } from "../../helpers/utils";

const ElapsedTime = ({ isRunning, beginTime, onReset }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  const timerRef = useRef(null);

  useEffect(() => {
    if (!isRunning && onReset) {
      setElapsedTime(0);
    }
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Date.now() - beginTime);
      }, 10);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, beginTime]);

  return <h1>{format(elapsedTime)}</h1>;
};

export default ElapsedTime;
