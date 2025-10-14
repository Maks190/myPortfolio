import React from "react";
import styles from "../styles/Landings.module.css"; // 👈 Импортируем стили как модуль
import landing1 from "../details/land1.png";
import landing2 from "../details/land2.png";
import landing3 from "../details/land3.png";
import landing4 from "../details/land4.png";

const Landings = () => {
  return (
    // Используем классы из styles
    <div className={styles.landingsSection}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <h2 className={styles.title}>LANDING PAGES</h2>

        {/* Контейнер для всех карточек (наша сетка) */}
        <div className={styles.gridContainer}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <img src={landing1} alt="Landing 1" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>LANDING 1</h3>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <img src={landing2} alt="Landing 2" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>LANDING 2</h3>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <img src={landing3} alt="Landing 3" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>LANDING 3</h3>
          </div>

          {/* Карточка 4 */}
          <div className={styles.card}>
            <img src={landing4} alt="Landing 4" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>LANDING 4</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landings;
