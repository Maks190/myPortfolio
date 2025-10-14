import React from "react";
import crown from "../details/crown.png";
import ifinity from "../details/infinity.png";
import response from "../details/response.png";
import timer from "../details/timer.png";
import uiKit from "../details/uiKit.png";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <p className={styles.pretitle}>Design addicted</p>
          <h2 className={styles.title}>A stylish UI Kit</h2>
          <h3 className={styles.subtitle}>for all web creatives</h3>
          <p className={styles.description}>
            Zero is a Webflow Ecommerce and CMS UI kit including several
            carefully designed page layouts.
          </p>
          <div className={styles.iconsContainer}>
            <div className={styles.icon}>
              <img src={crown} alt="Crown Icon" />
              <p>smooth interactions</p>
            </div>
            <div className={styles.icon}>
              <img src={ifinity} alt="Infinity Icon" />
              <p>many page layouts</p>
            </div>
            <div className={styles.icon}>
              <img src={response} alt="Responsive Icon" />
              <p>fully responsive</p>
            </div>
            <div className={styles.icon}>
              <img src={timer} alt="Timer Icon" />
              <p>Fast customization</p>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img src={uiKit} alt="UI Kit" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
