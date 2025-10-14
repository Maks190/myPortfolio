// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import PreFt from "./components/PreFt";
import Footer from "./components/Footer";
import RegistrationPage from "./components/RegistrationPage"; // Импортируем новую страницу

// Создадим компонент для главной страницы, чтобы не дублировать код
const MainPage = () => (
  <>
    <Header />
    <Navbar />
    <About />
    <Capabilities />
    <PreFt />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
