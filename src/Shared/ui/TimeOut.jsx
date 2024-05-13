import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TimeOut = ({ action, seconds = 30 }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [countdown, setCountdown] = useState(seconds);
  const [showTimeout, setShowTimeout] = useState(false);
  useEffect(() => {
    setShowTimeout(true);
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setShowTimeout(false);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (showTimeout) {
    return (
      <div
        className="flex gap-2 bg-lightNeutral p-3 justify-center md:text-base text-sm text-center text-red-500"
        aria-live="assertive"
      >
        <span>
          {language
            ? `يمكنك إعادة ${action || "العملية"} بعد`
            : `You can redo the ${action || "process"} after`}
        </span>
        <span>00:{countdown < 10 ? `0${countdown}` : countdown}</span>
      </div>
    );
  } else return null;
};

export default TimeOut;
