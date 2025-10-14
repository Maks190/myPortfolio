// src/components/OneConFile.jsx

import React, { useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Advantages from "./Advantages";
import Invitation from "./Invitation";
import Landings from "./Landings";
import Footer from "./Footer";

const OneConFile = () => {
  // --- 1. Создаем рефы для секций ---
  const heroRef = useRef(null);
  const landingsRef = useRef(null);
  const topRef = useRef(null); // Этот реф будет указывать на самый верх

  // --- 2. Функции для прокрутки ---
  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLandings = () => {
    if (landingsRef.current) {
      const elementPosition =
        landingsRef.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 20; // Вычитаем 20px

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    // Просто скроллим в самый верх
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // Используем пустой тег <> и вешаем на него реф для верха страницы
    <>
      <div ref={topRef}></div>

      {/* --- 3. Передаем функции в Header и Footer --- */}
      <Header
        onScrollToHero={scrollToHero}
        onScrollToLandings={scrollToLandings}
      />

      {/* Оборачиваем компоненты в div и присваиваем им рефы */}
      <div ref={heroRef}>
        <Hero />
      </div>
      <Advantages />
      <Invitation />
      <div ref={landingsRef}>
        <Landings />
      </div>

      <Footer onScrollToTop={scrollToTop} />
    </>
  );
};

export default OneConFile;
