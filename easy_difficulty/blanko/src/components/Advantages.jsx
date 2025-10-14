import React from "react";
import loader from "../details/loader.png";
import objects from "../details/objects.png";
import modules from "../details/modules.png";
// Предположим, ты импортируешь стили так:
import styles from "../styles/Advantages.module.css";

const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.advantagesContainer}>
        {/* Модуль 1 */}
        <div className={styles.advantageItem}>
          <img src={loader} alt="loader-icon" />
          <div className={styles.advantageText}>
            <h3>Speed</h3>
            <p>Open a commercial-grade current account from anywhere</p>
          </div>
        </div>

        {/* Модуль 2 */}
        <div className={styles.advantageItem}>
          <img src={objects} alt="objects-icon" />
          <div className={styles.advantageText}>
            <h3>Design</h3>
            <p>Open a commercial-grade current account from anywhere</p>
          </div>
        </div>

        {/* Модуль 3 */}
        <div className={styles.advantageItem}>
          <img src={modules} alt="modules-icon" />
          <div className={styles.advantageText}>
            <h3>Modularity</h3>
            <p>Open a commercial-grade current account from anywhere</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
