import { useEffect, useRef } from "react";
import { format } from "../../helpers/utils";

const ElapsedTime = ({ isRunning, beginTime, onReset }) => {
  const elapsedRef = useRef(null);

  useEffect(() => {
    let timer;
    if (!isRunning && onReset) {
      elapsedRef.current.textContent = format(0);
    }
    if (isRunning) {
      timer = setInterval(() => {
        elapsedRef.current.textContent = format(Date.now() - beginTime);
      }, 10);
    }
    return () => clearInterval(timer);
  }, [isRunning, onReset, beginTime]);

  return <h1 ref={elapsedRef}>{format(0)}</h1>;
};

export default ElapsedTime;
