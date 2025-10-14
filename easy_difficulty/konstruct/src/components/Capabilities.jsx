import React, { useRef, useState } from "react";
import bookmark from "../details/bookmarks.png";
import shop from "../details/shop.png";
import bank from "../details/bank.png";
import styles from "../styles/Capabilities.module.css";

const Capabilities = () => {
  const [allServicesBtnStyle, setAllServicesBtnStyle] = useState("");

  const allServicesTimerRef = useRef(null);

  const handleServicesMouseDown = () => {
    setAllServicesBtnStyle(styles.clicked);
    allServicesTimerRef.current = setTimeout(() => {
      setAllServicesBtnStyle(styles.held);
    }, 125);
  };

  const handleServicesMouseUp = () => {
    clearTimeout(allServicesTimerRef.current);
    setAllServicesBtnStyle("");
  };

  return (
    <div id="services" className={styles.capabilities}>
      <div className={styles.capabilitiesContainer}>
        {/* Верхняя часть секции */}
        <div className={styles.topSection}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>Our Capabilities</h3>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
          <button
            className={`${styles.servicesButton} ${allServicesBtnStyle}`}
            onMouseDown={handleServicesMouseDown}
            onMouseUp={handleServicesMouseUp}
            onMouseLeave={handleServicesMouseUp}
          >
            ALL SERVICES
          </button>
        </div>

        {/* Контейнер для карточек */}
        <div className={styles.cardsContainer}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <img src={bookmark} alt="Project and Construction Management" />
            <h4>PROJECT AND CONSTRUCTION MANAGEMENT</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <img src={shop} alt="Structure Audit and Maintenance" />
            <h4>STRUCTURE AUDIT AND MAINTENANCE</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <img src={bank} alt="Factory Construction and Modeling" />
            <h4>FACTORY CONSTRUCTION AND MODELING</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
