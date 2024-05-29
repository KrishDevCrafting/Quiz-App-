import React, { useState, useEffect } from "react";
import "./style.css";

const Typewriter = ({ text, minSpeed = 50, maxSpeed = 150 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, Math.random() * (maxSpeed - minSpeed) + minSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, minSpeed, maxSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="typewriter">
      {displayedText}
      {showCursor && <span className="cursor">|</span>}
    </span>
  );
};

export default Typewriter;
