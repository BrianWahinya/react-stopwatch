import { useState, useRef } from "react";
import ElapsedTime from "./ElapsedTime";
import Button from "../Button/Button";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [beginTime, setBeginTime] = useState(Date.now());
  const stopTimeGone = useRef(0);

  const start = (e) => {
    if (!isRunning) {
      setIsRunning(true);
      setBeginTime(Date.now() - stopTimeGone.current);
    }
  };

  const reset = () => {
    if ((stopTimeGone.current && !isRunning) || isRunning) {
      setIsRunning(false);
      setBeginTime(Date.now());
      stopTimeGone.current = 0;
    }
  };

  const stop = () => {
    if (isRunning) {
      setIsRunning(false);
      stopTimeGone.current = Date.now() - beginTime;
    }
  };

  return (
    <>
      <ElapsedTime isRunning={isRunning} beginTime={beginTime} />
      <div className="card">
        <Button name="Start" action={start} disabled={isRunning} />
        <Button
          name="Reset"
          action={reset}
          disabled={stopTimeGone.current === 0 && !isRunning}
        />
        <Button name="Stop" action={stop} disabled={!isRunning} />
      </div>
    </>
  );
};

export default Stopwatch;
