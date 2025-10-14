// Файл: src/components/Invitation.jsx

import React, { useState, useEffect, useRef } from "react";
import DRUK from "../details/DRUK.png";
import styles from "../styles/Invitation.module.css";

const Invitation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2; // У нас всего 2 слайда

  // Ref-ы для логики перетаскивания
  const isDraggingRef = useRef(false);
  const startPosRef = useRef(0);
  const currentTranslateRef = useRef(0);
  const prevTranslateRef = useRef(0);

  // Ref для самого слайдера, чтобы мы могли менять его стиль напрямую
  const sliderRef = useRef(null);

  // --- Автопрокрутка ---
  useEffect(() => {
    // Запускаем интервал, который меняет слайд каждые 30 секунд
    const interval = setInterval(() => {
      // setActiveSlide вызовет перезапуск этого useEffect
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 30000); // 30 секунд

    // Функция очистки: React вызовет ее перед перезапуском эффекта
    return () => clearInterval(interval);
  }, [activeSlide]); // <--- ВОТ ИЗМЕНЕНИЕ! ДОБАВИЛИ activeSlide В ЗАВИСИМОСТИ

  // Этот useEffect будет плавно сдвигать слайдер, когда activeSlide меняется
  useEffect(() => {
    if (sliderRef.current) {
      const newTranslate = -activeSlide * sliderRef.current.offsetWidth;
      currentTranslateRef.current = newTranslate;
      prevTranslateRef.current = newTranslate;
      sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
      // Важно: возвращаем transition после смены слайда
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [activeSlide]);

  // --- Функции для перетаскивания ---
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    startPosRef.current = e.pageX;
    sliderRef.current.style.transition = "none";
  };

  const handleMouseMove = (e) => {
    if (isDraggingRef.current) {
      const currentPosition = e.pageX;
      currentTranslateRef.current =
        prevTranslateRef.current + currentPosition - startPosRef.current;
      sliderRef.current.style.transform = `translateX(${currentTranslateRef.current}px)`;
    }
  };

  const handleMouseUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const movedBy = currentTranslateRef.current - prevTranslateRef.current;

    if (movedBy < -100 && activeSlide < totalSlides - 1) {
      // Эта функция вызовет перезапуск обоих useEffect
      setActiveSlide(activeSlide + 1);
    } else if (movedBy > 100 && activeSlide > 0) {
      // И эта тоже
      setActiveSlide(activeSlide - 1);
    } else {
      // Если сдвинули недостаточно, возвращаем слайдер на место
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = `translateX(${prevTranslateRef.current}px)`;
    }
  };

  // Создаем массив слайдов
  const slidesContent = Array.from({ length: totalSlides }).map((_, index) => (
    <div className={styles.slide} key={index}>
      <img src={DRUK} alt="DRUK" />
      <p className={styles.description}>
        "Join a community of industry leading professionals. Join a community of
        industry leading professionals."
      </p>
      <p className={styles.name}>Laura Paula</p>
      <p className={styles.post}>Director @Company</p>
    </div>
  ));

  return (
    <div
      className={styles.invitation}
      // Добавляем обработчики на весь блок
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Если курсор ушел, считаем, что перетаскивание закончилось
    >
      <div className={styles.invitationContainer}>
        <div ref={sliderRef} className={styles.sliderWrapper}>
          {slidesContent}
        </div>

        <div className={styles.pagination}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${
                activeSlide === index ? styles.active : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invitation;
