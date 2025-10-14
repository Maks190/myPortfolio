import React from "react";
import styles from "../styles/CMSPgs.module.css"; // 👈 Импортируем стили как модуль
import works from "../details/works.png";
import blog1 from "../details/blog1.png";
import blog2 from "../details/blog2.png";
import blog3 from "../details/blog3.png";
import shop1 from "../details/shop1.png";
import shop2 from "../details/shop2.png";
import careers from "../details/careers.png";
import singleProduct from "../details/singleProductPage.png";
import singlePost from "../details/singlePostPage.png";
import singleCareers from "../details/singleCareersPage.png";
import singleWork from "../details/singleWorkPage.png";

const Landings = () => {
  return (
    // Используем классы из styles
    <div className={styles.cmsPgsSection}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <h2 className={styles.title}>CMS Pages</h2>

        {/* Контейнер для всех карточек (наша сетка) */}
        <div className={styles.gridContainer}>
          {/* Карточка 1 */}
          <div className={styles.card}>
            <img src={works} alt="Works" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Works</h3>
          </div>

          {/* Карточка 2 */}
          <div className={styles.card}>
            <img src={blog1} alt="Blog 1" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Blog 1</h3>
          </div>

          {/* Карточка 3 */}
          <div className={styles.card}>
            <img src={blog2} alt="Blog 2" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Blog 2</h3>
          </div>

          {/* Карточка 4 */}
          <div className={styles.card}>
            <img src={blog3} alt="Blog 3" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Blog 3</h3>
          </div>

          <div className={styles.card}>
            <img src={shop1} alt="Shop 1" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Shop 1</h3>
          </div>

          <div className={styles.card}>
            <img src={shop2} alt="Shop 2" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Shop 2</h3>
          </div>

          <div className={styles.card}>
            <img src={careers} alt="Careers" className={styles.cardImage} />
            <h3 className={styles.cardTitle}>Careers</h3>
          </div>

          <div className={styles.card}>
            <img
              src={singleProduct}
              alt="Single Product Page"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Single Product Page</h3>
          </div>

          <div className={styles.card}>
            <img
              src={singlePost}
              alt="Single Post Page"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Single Post Page</h3>
          </div>

          <div className={styles.card}>
            <img
              src={singleCareers}
              alt="Single Careers Page"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Single Careers Page</h3>
          </div>

          <div className={styles.card}>
            <img
              src={singleWork}
              alt="Single Work Page"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>Single Work Page</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landings;
