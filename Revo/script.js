document.addEventListener("DOMContentLoaded", () => {
  // ===================================================
  //   ЧАСТЬ 1: АНИМАЦИЯ ЗАГОЛОВКА В HERO-СЕКЦИИ (Твой старый код)
  // ===================================================
  const words = [
    document.querySelector(".word-your"),
    document.querySelector(".word-coffee"),
    document.querySelector(".word-personalized"),
  ];

  // Проверяем, что все слова найдены, прежде чем продолжить
  if (words.every((word) => word)) {
    words.forEach((w) => w.classList.add("hidden-initial"));

    const resetWordAnimation = (word) => {
      word.classList.remove("animate", "show-background");
      word.classList.add("hidden-initial");
      word.style.animation = "none";
      void word.offsetHeight;
      word.style.animation = null;
    };

    const startAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const [wordYour, wordCoffee, wordPersonalized] = words;
          const initialDelay = 1000;
          const wordStartDelay = 1000;
          const animationDuration = 3500;

          words.forEach(resetWordAnimation);

          setTimeout(() => {
            wordYour.classList.remove("hidden-initial");
            wordYour.classList.add("animate");

            setTimeout(() => {
              wordCoffee.classList.remove("hidden-initial");
              wordCoffee.classList.add("animate");

              setTimeout(() => {
                wordPersonalized.classList.remove("hidden-initial");
                wordPersonalized.classList.add("animate");

                setTimeout(() => {
                  wordPersonalized.classList.add("show-background");
                }, animationDuration - 900);
              }, wordStartDelay);
            }, wordStartDelay);
          }, initialDelay);

          // Говорим "наблюдателю" прекратить следить за этим элементом
          observer.unobserve(entry.target);
        }
        // Блок else был удален
      });
    };

    const observer = new IntersectionObserver(startAnimation, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const heroText = document.querySelector(".hero-text");
    if (heroText) {
      observer.observe(heroText);
    }
  }

  // ===================================================
  //   ЧАСТЬ 2: СЛАЙДЕР ДЛЯ СЕКЦИИ "CHOOSE YOUR FAVORITE"
  // ===================================================
  const carouselGrid = document.getElementById("coffeeCarousel");
  const nextButton = document.getElementById("carouselNext");
  const carouselWrapper = document.querySelector(
    ".your-favorite-carousel-wrapper"
  );

  if (carouselGrid && nextButton && carouselWrapper) {
    const items = carouselGrid.querySelectorAll(".favorite-icon-item");

    if (items.length > 0) {
      const itemsPerColumn = 2;
      const totalColumns = Math.ceil(items.length / itemsPerColumn);
      const visibleColumns = 2;
      const gap = 20; // Жестко задаем отступ из CSS (должен совпадать с CSS)

      let currentColumn = 0;

      nextButton.addEventListener("click", () => {
        currentColumn++;
        if (currentColumn > totalColumns - visibleColumns) {
          currentColumn = 0;
        }

        const itemWidth = (carouselWrapper.offsetWidth - gap) / 2;
        const offset = currentColumn * (itemWidth + gap);

        carouselGrid.style.transform = `translateX(-${offset}px)`;
      });
    }
  }

  // ===================================================
  //   ЧАСТЬ 3: ЛОГИКА ДЛЯ СЕКЦИИ "BEST GIFT" (ОБНОВЛЕННАЯ)
  // ===================================================
  const paginationItems = document.querySelectorAll(".best-gift-pagination li");
  const giftsetCards = document.querySelectorAll(".giftset-card");

  if (paginationItems.length > 0 && giftsetCards.length > 0) {
    paginationItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Получаем индекс (1, 2, или 3) из data-атрибута кликнутого элемента
        const selectedIndex = item.dataset.index;

        // 1. Убираем класс 'active' у всех кнопок пагинации
        paginationItems.forEach((li) => li.classList.remove("active"));
        // 2. Добавляем класс 'active' только к той, по которой кликнули
        item.classList.add("active");

        // 3. Прячем все карточки с информацией
        giftsetCards.forEach((card) => card.classList.remove("active"));

        // 4. Находим нужную карточку по её data-index и показываем её
        const activeCard = document.querySelector(
          `.giftset-card[data-index="${selectedIndex}"]`
        );
        if (activeCard) {
          activeCard.classList.add("active");
        }
      });
    });
  }

  // ===================================================
  //   ЧАСТЬ 4: БЕСКОНЕЧНЫЙ СЛАЙДЕР "COMBO" С АВТОПРОКРУТКОЙ
  // ===================================================
  const comboCarousel = document.getElementById("comboCarousel");
  const comboNextButton = document.getElementById("comboCarouselNext");
  // Находим родительский контейнер карусели
  const comboWrapper = comboCarousel
    ? comboCarousel.closest(".combo-carousel-wrapper")
    : null;

  if (comboCarousel && comboNextButton && comboWrapper) {
    const cards = comboCarousel.querySelectorAll(".combo-card");
    const totalCards = cards.length;
    let cardWidth = 0;
    let gap = 0;
    let currentIndex = 0;
    let autoScrollInterval; // Переменная для хранения нашего интервала

    // --- 1. Подготовка: Клонирование элементов ---
    cards.forEach((card) => {
      const clone = card.cloneNode(true);
      comboCarousel.appendChild(clone);
    });

    function updateMetrics() {
      if (cards.length > 0) {
        const style = window.getComputedStyle(cards[0]);
        cardWidth = cards[0].offsetWidth;
        gap = parseInt(style.marginRight) || 30;
      }
    }

    updateMetrics();
    window.addEventListener("resize", updateMetrics);

    // --- 2. Новая функция для прокрутки ---
    // Мы выносим логику сдвига в отдельную функцию, чтобы ее можно было вызывать и по клику, и автоматически.
    function scrollNext() {
      currentIndex++;
      const offset = currentIndex * (cardWidth + gap);
      comboCarousel.style.transform = `translateX(-${offset}px)`;

      // Логика "бесконечности"
      if (currentIndex === totalCards) {
        setTimeout(() => {
          comboCarousel.style.transition = "none";
          currentIndex = 0;
          comboCarousel.style.transform = `translateX(0)`;
          setTimeout(() => {
            comboCarousel.style.transition = "transform 0.5s ease-in-out";
          }, 50);
        }, 500);
      }
    }

    // --- 3. Логика ручного клика ---
    comboNextButton.addEventListener("click", () => {
      // При ручном клике сбрасываем текущий таймер и сразу же прокручиваем
      clearInterval(autoScrollInterval);
      scrollNext();
      // А затем запускаем таймер заново
      autoScrollInterval = setInterval(scrollNext, 3500);
    });

    // --- 4. Логика автопрокрутки и паузы при наведении ---
    // Функция для запуска автопрокрутки
    function startAutoScroll() {
      autoScrollInterval = setInterval(scrollNext, 3500); // 3500 миллисекунд = 3.5 секунды
    }

    // Функция для остановки
    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }

    // Останавливаем прокрутку, когда мышь находится над каруселью
    comboWrapper.addEventListener("mouseenter", stopAutoScroll);
    // Возобновляем, когда мышь уходит
    comboWrapper.addEventListener("mouseleave", startAutoScroll);

    // Запускаем автопрокрутку в первый раз
    startAutoScroll();
  }
});
