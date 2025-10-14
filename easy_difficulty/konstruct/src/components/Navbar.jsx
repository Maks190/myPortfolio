// src/components/Navbar.jsx

import React from "react";
import navbarlogo from "../details/projeco-logo-black.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  // Функция для плавной прокрутки к элементу с отступом в 30px
  const smoothScrollTo = (id) => (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const element = document.getElementById(id);
    if (element) {
      const offset = 30; // Заданный отступ в 30px
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Включаем плавную анимацию
      });

      // НОВАЯ СТРОКА: Убираем хэш из URL, чтобы он не оставался в истории
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  };

  // Функция для плавной прокрутки в самый верх страницы
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Функция для плавной прокрутки в самый низ страницы
  const scrollToBottom = (event) => {
    event.preventDefault();
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Логотип теперь тоже плавно скроллит наверх */}
        <a href="#" onClick={scrollToTop}>
          <img
            className={styles.navbarLogo}
            src={navbarlogo}
            alt="Navbar logo"
          />
        </a>

        {/* Добавляем обработчики onClick к каждой ссылке */}
        <div className={styles.navLinks}>
          <a href="#" onClick={scrollToTop}>
            HOME
          </a>
          <a href="#about" onClick={smoothScrollTo("about")}>
            ABOUT
          </a>
          <a href="#services" onClick={smoothScrollTo("services")}>
            SERVICES
          </a>
          <a href="#work" onClick={smoothScrollTo("work")}>
            WORK
          </a>
          <a href="#contact" onClick={scrollToBottom}>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
