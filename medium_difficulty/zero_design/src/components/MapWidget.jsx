import React from "react";
import styles from "../styles/MapWidget.module.css";

// Принимаем функцию onCloseClick для обработки клика
const MapWidget = ({ onCloseClick }) => {
  return (
    <div className={styles.mapContainer}>
      {/* Вот наша кнопка-крестик. При клике на нее вызывается переданная функция */}
      <button onClick={onCloseClick} className={styles.closeButton}>
        ×
      </button>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.4246709246813!2d-0.1611306243415543!3d51.52377030950856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2zMjIxQiBCYWtlciBTdCwgTG9uZG9uIE5XMSA2WEUsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sua!4v1754644703330!5m2!1sru!2sua"
        width="300"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapWidget;
