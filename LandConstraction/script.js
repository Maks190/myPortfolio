document.addEventListener("DOMContentLoaded", () => {
  // Функция настройки карусели, принимающая ID элементов
  function initCarousel(trackId, btnLeftId, btnRightId, progressBarId) {
    const track = document.getElementById(trackId);
    const btnLeft = document.getElementById(btnLeftId);
    const btnRight = document.getElementById(btnRightId);
    const progressBar = document.getElementById(progressBarId);

    // Если элементы не найдены (на случай ошибки в HTML), выходим
    if (!track || !btnLeft || !btnRight || !progressBar) return;

    function updateControls() {
      const scrollLeft = track.scrollLeft;
      const scrollWidth = track.scrollWidth;
      const clientWidth = track.clientWidth;
      const maxScroll = scrollWidth - clientWidth;

      if (scrollLeft <= 0) {
        btnLeft.classList.add("disabled");
      } else {
        btnLeft.classList.remove("disabled");
      }

      // Небольшой допуск (-1) для точности вычислений
      if (scrollLeft >= maxScroll - 1) {
        btnRight.classList.add("disabled");
      } else {
        btnRight.classList.remove("disabled");
      }

      // Расчет прогресс-бара
      const scrollPercentage = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      const maxLeft = 100 - 20; // 20% - ширина ползунка
      const newLeft = scrollPercentage * maxLeft;

      progressBar.style.left = `${newLeft}%`;
    }

    btnRight.addEventListener("click", () => {
      // Берем ширину первого элемента внутри трека
      const firstItem = track.firstElementChild;
      if (firstItem) {
        const itemWidth = firstItem.getBoundingClientRect().width;
        const gap = 35; // Или получить из getComputedStyle
        track.scrollBy({ left: itemWidth + gap, behavior: "smooth" });
      }
    });

    btnLeft.addEventListener("click", () => {
      const firstItem = track.firstElementChild;
      if (firstItem) {
        const itemWidth = firstItem.getBoundingClientRect().width;
        const gap = 35;
        track.scrollBy({ left: -(itemWidth + gap), behavior: "smooth" });
      }
    });

    track.addEventListener("scroll", updateControls);

    // Инициализация при загрузке
    updateControls();
  }

  // 1. Запускаем для Услуг
  initCarousel(
    "trackServices",
    "btnLeftServices",
    "btnRightServices",
    "progressBarServices"
  );

  // 2. Запускаем для Портфолио
  initCarousel(
    "trackPortfolio",
    "btnLeftPortfolio",
    "btnRightPortfolio",
    "progressBarPortfolio"
  );

  // 3. Запускаем для Отзывов
  initCarousel(
    "trackReviews",
    "btnLeftReviews",
    "btnRightReviews",
    "progressBarReviews"
  );
});
