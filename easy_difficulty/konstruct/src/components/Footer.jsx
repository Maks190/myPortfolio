// src/components/Footer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Импортируем Link для навигации
import logo from "../details/projeco-logo.png";
import styles from "../styles/Footer.module.css";
import facebook from "../details/ftFcbk.png";
import twitter from "../details/ftTwtr.png";
import google from "../details/ftGog.png";
import { userAPI } from "../api/mock-server"; // Импортируем наш mock-сервер

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Для сообщений пользователю
  const [isLoading, setIsLoading] = useState(false);

  // --- Функции для прокрутки остаются без изменений ---
  const smoothScrollTo = (id) => (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 30;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToBottom = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  // --- Новая логика для кнопки SIGNUP ---
  const handleSignupClick = async () => {
    if (!email) {
      setMessage("Please enter an email address.");
      return;
    }
    setIsLoading(true);
    setMessage("");

    // This is the NEW block to insert
    try {
      // Шаг 1: Проверяем, существует ли пользователь (это остается как было)
      const { exists, user } = await userAPI.checkUser(email);

      if (exists) {
        // Шаг 2: ЕСЛИ СУЩЕСТВУЕТ - отправляем реальный запрос на ваш бэкенд
        const response = await fetch("http://localhost:3001/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: user.email, // Передаем email получателя
            username: user.username, // Передаем имя пользователя
          }),
        });

        const result = await response.json();

        // Если сервер вернул ошибку, показываем ее
        if (!response.ok) {
          throw new Error(result.message || "Failed to send email.");
        }

        // Обновляем сообщение для пользователя
        setMessage(
          `Hello, ${user.username}! A real email has been sent to ${user.email}. Check your inbox!`
        );
        setEmail("");
      } else {
        // Эта часть не меняется: если пользователя нет, предлагаем регистрацию
        setMessage(
          <span>
            User does not exist. Please{" "}
            <Link to="/register" className={styles.registerLink}>
              register
            </Link>{" "}
            first.
          </span>
        );
      }
    } catch (error) {
      // Обработка ошибок, если что-то пошло не так с fetch
      setMessage(`An error occurred: ${error.message}`);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <h3>Newsletter Signup</h3>
          <div className={styles.signupForm}>
            <input
              type="email"
              placeholder="test@youremail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <button onClick={handleSignupClick} disabled={isLoading}>
              {isLoading ? "CHECKING..." : "SIGNUP"}
            </button>
          </div>
        </div>
        {/* Контейнер для сообщений */}
        {message && <p className={styles.feedbackMessage}>{message}</p>}
      </div>

      {/* Основной контент футера (остается без изменений) */}
      <div className={styles.mainFooter}>
        <div className={styles.footerContainer}>
          {/* ... остальная часть вашего футера ... */}
          <div className={styles.footerColumn}>
            <h4>COMPANY</h4>
            <img src={logo} alt="Konstruct" className={styles.footerLogo} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat.
            </p>
          </div>

          <div className={styles.linksColumns}>
            <div className={styles.linkColumn}>
              <h4>LINKS</h4>
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
                PROJECTS
              </a>
              <a href="#contact" onClick={scrollToBottom}>
                CONTACT US
              </a>
            </div>
            <div className={styles.linkColumn}>
              <h4>FAQ</h4>
              <a href="#" onClick={scrollToTop}>
                TERMS
              </a>
              <a href="#" onClick={scrollToTop}>
                CAREERS
              </a>
            </div>
            <div className={styles.linkColumn}>
              <h4>BLOG</h4>
              <a href="#" onClick={scrollToTop}>
                PARTNERS
              </a>
              <a href="#" onClick={scrollToTop}>
                NEWS
              </a>
            </div>
          </div>

          <div className={styles.contactWrapper}>
            <div className={styles.footerColumn}>
              <h4>CONTACT US</h4>
              <p>213 Baker Street</p>
              <p>Oriel City Kounty</p>
              <p>7000 KNW</p>
              <p>Kounty Name</p>
              <p className={styles.contactInfo}>+23 994 233 4022</p>
              <p className={styles.contactInfo}>ingo@konstruct.com</p>
            </div>
            <div className={styles.socialIcons}>
              <a href="#" onClick={scrollToTop}>
                <img src={facebook} alt="facebook_icon" />
              </a>
              <a href="#" onClick={scrollToTop}>
                <img src={twitter} alt="twitter_icon" />
              </a>
              <a href="#" onClick={scrollToTop}>
                <img src={google} alt="google_icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div className={styles.copyrightContainer}>
          <p>© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
