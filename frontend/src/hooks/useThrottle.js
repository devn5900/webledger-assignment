import React, { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const [throttleValue, setThrottleValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottleValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttleValue;
  
};

export default useThrottle;
