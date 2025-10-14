import React from "react";
import styles from "../styles/Companies.module.css"; // 👈 Импортируем стили как модуль
import about1 from "../details/about1.png";
import about2 from "../details/about2.png";
import contact1 from "../details/contact1.png";
import contact2 from "../details/contact2.png";
import contact3 from "../details/contact3.png";
import team from "../details/team.png";
import faq from "../details/faq.png";

const Landings = () => {
  return (
    // Используем классы из styles
    <div className={styles.companiesSection}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <h2 className={styles.title}>Company</h2>

        {/* Контейнер для всех карточек (наша сетка) */}
        <div className={styles.gridContainer}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <img src={about1} alt="About 1" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>about 1</h3>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <img src={about2} alt="About 2" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>about 2</h3>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <img src={contact1} alt="Contact 1" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>contact 1</h3>
          </div>

          {/* Карточка 4 */}
          <div className={styles.card}>
            <img src={contact2} alt="Contact 2" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>contact 2</h3>
          </div>

          <div className={styles.card}>
            <img src={contact3} alt="Contact 3" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>contact 3</h3>
          </div>

          <div className={styles.card}>
            <img src={team} alt="Team" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>team</h3>
          </div>

          <div className={styles.card}>
            <img src={faq} alt="Faq" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>faq</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landings;
