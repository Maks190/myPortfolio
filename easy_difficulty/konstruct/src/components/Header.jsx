import React from "react";
import headerlogo from "../details/projeco-logo.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <a href="#home">
            <img src={headerlogo} alt="Header Logo" />
          </a>
        </div>
        <div className={styles.headerMiddle}>
          <h1>PARTNER WITH KONSTUCT</h1>
          <p>An award-winning construction management firm</p>
        </div>
        <div className={styles.headerBottom}>
          <p>SCROLL DOWN</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
