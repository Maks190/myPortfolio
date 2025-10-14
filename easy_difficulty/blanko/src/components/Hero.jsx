// src/components/Hero.jsx

import React, { useState, useRef } from "react";
import heroBanner from "../details/banner.png";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  // --- Состояния для кнопок ---
  const [purchaseBtnStyle, setPurchaseBtnStyle] = useState("");
  const [otherBtnStyle, setOtherBtnStyle] = useState("");

  // useRef для таймеров каждой кнопки
  const purchaseTimerRef = useRef(null);
  const otherTimerRef = useRef(null);

  // --- Обработчики для черной кнопки "Purchase" ---
  const handlePurchaseMouseDown = () => {
    setPurchaseBtnStyle(styles.clicked);
    purchaseTimerRef.current = setTimeout(() => {
      setPurchaseBtnStyle(styles.held);
    }, 100);
  };

  const handlePurchaseMouseUp = () => {
    clearTimeout(purchaseTimerRef.current);
    setPurchaseBtnStyle("");
  };

  // --- Обработчики для белой кнопки "Other templates" ---
  const handleOtherMouseDown = () => {
    setOtherBtnStyle(styles.otherBtnClicked); // Используем новый CSS-класс
    otherTimerRef.current = setTimeout(() => {
      setOtherBtnStyle(styles.otherBtnHeld); // Используем новый CSS-класс
    }, 100);
  };

  const handleOtherMouseUp = () => {
    clearTimeout(otherTimerRef.current);
    setOtherBtnStyle("");
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <h1>Blanko template</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio mauris
            porttitor amet volutpat.{" "}
          </p>

          {/* Черная кнопка со своими состояниями и функциями */}
          <button
            className={`${styles.heroPurBtn} ${purchaseBtnStyle}`}
            onMouseDown={handlePurchaseMouseDown}
            onMouseUp={handlePurchaseMouseUp}
            onMouseLeave={handlePurchaseMouseUp}
          >
            Purchase template
          </button>

          {/* Белая кнопка со своими состояниями и функциями */}
          <button
            className={`${styles.otherBtn} ${otherBtnStyle}`}
            onMouseDown={handleOtherMouseDown}
            onMouseUp={handleOtherMouseUp}
            onMouseLeave={handleOtherMouseUp}
          >
            Other templates
          </button>
        </div>
        <div className={styles.heroRight}>
          <img src={heroBanner} alt="heroBanner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
