// src/components/PreFt.jsx
import React, { useRef, useState } from "react";
import styles from "../styles/PreFt.module.css";

const PreFt = () => {
  const [allPreFtBtnStyle, setAllPreFtBtnStyle] = useState("");

  const allPreFtTimerRef = useRef(null);

  const handlePreFtMouseDown = () => {
    setAllPreFtBtnStyle(styles.preFtClicked);
    allPreFtTimerRef.current = setTimeout(() => {
      setAllPreFtBtnStyle(styles.preFtHeld);
    }, 125);
  };

  const handlePreFtMouseUp = () => {
    clearTimeout(allPreFtTimerRef.current);
    setAllPreFtBtnStyle("");
  };

  return (
    // Добавляем id="work" к главному контейнеру
    <div id="work" className={styles.preFt}>
      <div className={styles.preFtContainer}>
        <h2>Want to build something amazing?</h2>
        <button
          className={`${allPreFtBtnStyle}`}
          onMouseDown={handlePreFtMouseDown}
          onMouseUp={handlePreFtMouseUp}
          onMouseLeave={handlePreFtMouseUp}
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default PreFt;
