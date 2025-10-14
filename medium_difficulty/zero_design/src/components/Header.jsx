import React from "react";
import headerLogo from "../details/zeroLogo.png";
import searchIcon from "../details/searchIcon.png";
import cartIcon from "../details/cartIcon.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <img
            className={styles.headerLogo}
            src={headerLogo}
            alt="headerLogo"
          />
          <a href="#landings">Landing</a>
          <a href="#companies">Company</a>
          <a href="#cmsPages">CMS Pages</a>
          <a href="#utilities">Utility</a>
        </div>
        <div className={styles.headerRight}>
          <button>$129 Buy Now</button>
          <a href="#search">
            <img src={searchIcon} alt="searchIcon" />
          </a>
          <a href="#cart">
            <img src={cartIcon} alt="cartIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
