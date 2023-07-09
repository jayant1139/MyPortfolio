import React, { useEffect, useState } from 'react';

const Spinner = () => {
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="spinner">
      <div className="ring"></div>
      <span>{countdown}</span>
    </div>
  );
};

export default Spinner;
