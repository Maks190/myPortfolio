import React from "react";
import be from "../details/be.png";
import ball from "../details/ball.png";
import ve from "../details/ve.png";
import styles from "../styles/Footer.module.css"; // Импортируем стили

// 1. Принимаем функцию onShowMapClick как пропс
const Footer = ({ onShowMapClick }) => {
  // Функция для обработки клика, чтобы страница не перезагружалась
  const handleShowMap = (e) => {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    onShowMapClick(); // Вызываем функцию из App.js
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Верхняя часть футера: форма и колонки с ссылками */}
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <h4>Subscribe our newsletter</h4>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" />
              <button>Click</button>
            </div>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                <img src={be} alt="Behance" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src={ball} alt="Dribbble" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src={ve} alt="Vimeo" />
              </a>
            </div>
          </div>

          <div className={styles.footerRight}>
            {/* Колонка 1: Landings + Company */}
            <div className={styles.column}>
              <h4>Landing Pages</h4>
              <a href="#">Landing 1</a>
              <a href="#">Landing 2</a>
              <a href="#">Landing 3</a>
              <a href="#">Landing 4</a>

              <h4 className={styles.columnTitleWithMargin}>Company</h4>
              <a href="#">About 1</a>
              <a href="#">About 2</a>
              <a href="#">Contact 1</a>
              <a href="#">Contact 2</a>
              <a href="#">Contact 3</a>
              <a href="#">Team</a>
              <a href="#">FAQ</a>
            </div>

            <div className={styles.column}>
              <h4>Office</h4>
              <a
                href="https://maps.google.com/?q=221B Baker St, London NW1 6XE, United Kingdom"
                target="_blank"
                rel="noopener noreferrer"
              >
                221B Baker St,
                <br />
                London NW1 6XE,
                <br />
                United Kingdom
              </a>
              {/* 2. Вот наша новая ссылка */}
              <a
                href="#"
                onClick={handleShowMap}
                className={styles.showMapLink}
              >
                Show on map
              </a>
            </div>

            {/* Колонка 2: CMS Pages */}
            <div className={styles.column}>
              <h4>CMS Pages</h4>
              <a href="#">Blog 1</a>
              <a href="#">Blog 2</a>
              <a href="#">Blog 3</a>
              <a href="#">Single Post Page</a>
              <a href="#">Shop 1</a>
              <a href="#">Shop 2</a>
              <a href="#">Single Product Page</a>
              <a href="#">Careers</a>
              <a href="#">Single Careers Page</a>
              <a href="#">Works</a>
              <a href="#">Single Work Page</a>
            </div>

            {/* Колонка 3: Utility */}
            <div className={styles.column}>
              <h4>Utility</h4>
              <a href="#">Coming Soon</a>
              <a href="#">Password</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms And Conditions</a>
              <a href="#">404</a>
              <a href="#">Licensing</a>
              <a href="#">Contacts</a>
              <a href="#">Style Guide</a>
            </div>

            {/* 👇 Вот наша новая колонка для телефона */}
            <div className={styles.column}>
              <h4>Phone</h4>
              <a href="tel:+380123456789">+380 (12) 345-67-89</a>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера: копирайты */}
        <div className={styles.footerBottom}>
          <p>
            POWERED BY <span className={styles.yellowText}>WEBFLOW</span>
          </p>
          <p>
            CREATED BY <span className={styles.yellowText}>UDESLY</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
