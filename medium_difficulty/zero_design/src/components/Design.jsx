import React from "react";
import designImage from "../details/designImage.png";
import styles from "../styles/Design.module.css";

const Design = () => {
  return (
    <div className={styles.design}>
      <div className={styles.designContainer}>
        <div className={styles.designLeft}>
          <img src={designImage} alt="designImage" />
        </div>
        <div className={styles.designRight}>
          <h2>Zero Design</h2>
          <p>
            Includes a total of 10 static pages, divided like this: 4 Landing
            pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In
            addition to these, there are Webflow CMS driven pages: Blog (in 2
            variations), Shop (in 2 variations), Works and Careers. All with
            their respective single pages!
          </p>
          {/* ↓↓↓ НАЧАЛО ИЗМЕНЕНИЙ ↓↓↓ */}
          <div className={styles.designTags}>
            {/* Ряд 1 */}
            <div className={styles.tagsRow}>
              <span className={styles.designTag}>4 LANDING</span>
              <span className={styles.designTag}>2 ABOUT</span>
              <span className={styles.designTag}>3 CONTACT</span>
            </div>
            {/* Ряд 2 */}
            <div className={styles.tagsRow}>
              <span className={styles.designTag}>3 BLOG</span>
              <span className={styles.designTag}>2 SHOP</span>
            </div>
            {/* Ряд 3 */}
            <div className={styles.tagsRow}>
              <span className={styles.designTag}>WORKS</span>
              <span className={styles.designTag}>TEAM</span>
              <span className={styles.designTag}>CAREERS</span>
            </div>
            {/* Ряд 4 */}
            <div className={styles.tagsRow}>
              <span className={styles.designTag}>FORMS</span>
              <span className={styles.designTag}>UTILITY</span>
            </div>
          </div>
          {/* ↑↑↑ КОНЕЦ ИЗМЕНЕНИЙ ↑↑↑ */}
        </div>
      </div>
    </div>
  );
};

export default Design;
