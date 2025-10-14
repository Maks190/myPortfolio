import React from "react";
import worktable from "../details/worktable.png";
import working from "../details/working.png";
import window from "../details/window.png";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <div className={styles.mainTitle}>
          <h2>Our Story</h2>
        </div>

        {/* Новый контейнер для разделения контента на две колонки */}
        <div className={styles.contentWrapper}>
          {/* Левая колонка с текстом */}
          <div className={styles.textColumn}>
            <h3>
              Founded in 2011 by John Mathew Smith,{" "}
              <strong className="unWrd">Konstruct</strong> has become the number
              one construction management firm
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat.
            </p>
          </div>

          {/* Правая колонка с картинками */}
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <img src={worktable} alt="We plan" />
              <div className={styles.overlayText}>WE PLAN</div>
            </div>
            <div className={styles.imageCard}>
              <img src={working} alt="We manage" />
              <div className={styles.overlayText}>WE MANAGE</div>
            </div>
            <div className={styles.imageCard}>
              <img src={window} alt="We build" />
              <div className={styles.overlayText}>WE BUILD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
