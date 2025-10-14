// src/components/Header.jsx

import React, { useState, useRef } from "react";
import blankoLogo from "../details/IMAGE.png";
import styles from "../styles/Header.module.css";

// Принимаем функции через props
const Header = ({ onScrollToHero, onScrollToLandings }) => {
  const [purchaseBtn, setPurchaseBtn] = useState("");
  const purchaseTimerRef = useRef(null);

  const handlePurchaseMouseDown = () => {
    setPurchaseBtn(styles.purchaseClicked);
    purchaseTimerRef.current = setTimeout(() => {
      setPurchaseBtn(styles.purchaseHeld);
    }, 100);
  };

  const handlePurchaseMouseUp = () => {
    clearTimeout(purchaseTimerRef.current);
    setPurchaseBtn("");
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <img
            className={styles.blankoLogo}
            src={blankoLogo}
            alt="blankoLogo"
          />
          <a href="mailto:mail@blanko.com" className={styles.email}>
            mail@blanko.com
          </a>
        </div>

        <div className={styles.headerRight}>
          {/* 🔥 ИЗМЕНЕНИЕ: Заменяем <a> на <button> и добавляем onClick */}
          <button onClick={onScrollToLandings} className={styles.linkButton}>
            Landing
          </button>
          <a href="#">All pages</a>
          <button onClick={onScrollToHero} className={styles.linkButton}>
            Template
          </button>
          <button
            className={`${styles.purchase} ${purchaseBtn}`}
            onMouseDown={handlePurchaseMouseDown}
            onMouseUp={handlePurchaseMouseUp}
            onMouseLeave={handlePurchaseMouseUp}
          >
            Purchase template
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
