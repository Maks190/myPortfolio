import React from "react";
import styles from "../styles/Utilities.module.css"; // 👈 Импортируем стили как модуль
import comingSoon from "../details/comingSoon.png";
import errorPage from "../details/404.png";
import password from "../details/password.png";
import privacyPolicy from "../details/privacyPolicy.png";
import termsAndCondition from "../details/termsAndCondition.png";

const Landings = () => {
  return (
    // Используем классы из styles
    <div className={styles.utilitiesSection}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <h2 className={styles.title}>Utility</h2>

        {/* Контейнер для всех карточек (наша сетка) */}
        <div className={styles.gridContainer}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <img
              src={comingSoon}
              alt="Coming Soon"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Coming Soon</h3>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <img src={errorPage} alt="404" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>404</h3>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <img src={password} alt="Password" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Password</h3>
          </div>

          {/* Карточка 4 */}
          <div className={styles.card}>
            <img
              src={privacyPolicy}
              alt="Privacy Policy"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Privacy Policy</h3>
          </div>

          <div className={styles.card}>
            <img
              src={termsAndCondition}
              alt="Terms and Condition"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Terms and Condition</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landings;
