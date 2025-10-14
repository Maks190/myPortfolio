import React, { useState } from "react"; // 👈 1. Импортируем useState
import Header from "./components/Header";
import Hero from "./components/Hero";
import Design from "./components/Design";
import Landings from "./components/Landings";
import Companies from "./components/Companies";
import CMSPgs from "./components/CMSPgs";
import Utilities from "./components/Utilities";
import Footer from "./components/Footer";
import MapWidget from "./components/MapWidget";

const App = () => {
  // 2. Создаем состояние для видимости карты
  const [isMapVisible, setMapVisible] = useState(false);

  // 3. Создаем функцию, которая будет переключать это состояние
  const toggleMap = () => {
    setMapVisible(!isMapVisible);
  };

  return (
    <>
      <Header />
      <Hero />
      <Design />
      <Landings />
      <Companies />
      <CMSPgs />
      <Utilities />
      {/* 4. Передаем нашу функцию в Footer */}
      <Footer onShowMapClick={toggleMap} />

      {/* 5. Показываем карту, только если isMapVisible === true */}
      {/* и передаем функцию для закрытия в сам виджет */}
      {isMapVisible && <MapWidget onCloseClick={toggleMap} />}
    </>
  );
};

export default App;
