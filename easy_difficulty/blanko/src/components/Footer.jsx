// src/components/Footer.jsx

import React, { useState, useRef } from "react";
import styles from "../styles/Footer.module.css";

// Импортируем все необходимые изображения
import blankoLogo from "../details/IMAGE.png"; //
import webflowLogo from "../details/webflow.png"; //
import instagramIcon from "../details/instagram.png"; //
import twitterIcon from "../details/twitter.png"; //
import facebookIcon from "../details/facebook.png"; //

// Принимаем функцию onScrollToTop
const Footer = ({ onScrollToTop }) => {
  const [buttonStyle, setButtonStyle] = useState("");
  const timerRef = useRef(null);

  const handleMouseDown = () => {
    setButtonStyle(styles.buttonClicked);
    timerRef.current = setTimeout(() => {
      setButtonStyle(styles.buttonHeld);
    }, 100);
  };

  const handleMouseUp = () => {
    clearTimeout(timerRef.current);
    setButtonStyle("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* --- Верхняя часть футера --- */}
        <div className={styles.footerTop}>
          <img
            className={styles.blankoLogo}
            src={blankoLogo}
            alt="Blanko Logo"
          />
          <button
            className={`${styles.webflowBtn} ${buttonStyle}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            Get on Webflow
          </button>
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.middleLinks}>
            {/* 🔥 ИЗМЕНЕНИЕ: Заменяем <a> на <button> и добавляем onClick */}
            <button onClick={onScrollToTop} className={styles.linkButton}>
              Showcase
            </button>
            <button onClick={onScrollToTop} className={styles.linkButton}>
              Landing one
            </button>
            <button onClick={onScrollToTop} className={styles.linkButton}>
              Sign up
            </button>
            <button onClick={onScrollToTop} className={styles.linkButton}>
              Other templates
            </button>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        {/* --- Нижняя часть футера --- */}
        <div className={styles.footerBottom}>
          <div className={styles.poweredBy}>
            <span>Powered by</span>
            <img src={webflowLogo} alt="Webflow Logo" />
            <span>Designed by</span>
            <span className={styles.designerLink}>Veljko</span>
          </div>
          <div className={styles.contactLink}>
            <button onClick={onScrollToTop} className={styles.linkButton}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
