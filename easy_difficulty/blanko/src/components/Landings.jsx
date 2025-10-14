// Файл: src/components/Landings.jsx

import React from "react";
import lanone from "../details/LanOne.png";
import lantwo from "../details/LanTwo.png";
import lanthree from "../details/LanThree.png";
import lanfour from "../details/LanFour.png";
import styles from "../styles/Landings.module.css";

const Landings = () => {
  // Мы можем создать массив данных, чтобы не повторять код. Это хорошая практика в React!
  const landingPages = [
    { id: 1, src: lanone, alt: "Landing One", title: "Landing one" },
    { id: 2, src: lantwo, alt: "Landing Two", title: "Landing two" },
    { id: 3, src: lanthree, alt: "Landing Three", title: "Landing three" },
    { id: 4, src: lanfour, alt: "Landing Four", title: "Landing four" },
  ];

  return (
    <div className={styles.landings}>
      <div className={styles.landingsContainer}>
        <h2>Landing pages</h2>

        <div className={styles.imagesWrapper}>
          {landingPages.map((page) => (
            <div key={page.id} className={styles.imageContainer}>
              {/* ВОТ ГЛАВНОЕ ИЗМЕНЕНИЕ: мы добавили обёртку imageFrame */}
              <div className={styles.imageFrame}>
                <img src={page.src} alt={page.alt} />
              </div>
              <h3>{page.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landings;
