import { useEffect, useState } from "react";
function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const running = setInterval(() => {
      console.log("interval Running");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(running);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
