document.addEventListener("DOMContentLoaded", () => {
  const words = [
    document.querySelector(".word-your"),
    document.querySelector(".word-coffee"),
    document.querySelector(".word-personalized"),
  ];

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

          observer.unobserve(entry.target);
        }
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
      const gap = 20;

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

  const paginationItems = document.querySelectorAll(".best-gift-pagination li");
  const giftsetCards = document.querySelectorAll(".giftset-card");

  if (paginationItems.length > 0 && giftsetCards.length > 0) {
    paginationItems.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedIndex = item.dataset.index;

        paginationItems.forEach((li) => li.classList.remove("active"));
        item.classList.add("active");

        giftsetCards.forEach((card) => card.classList.remove("active"));

        const activeCard = document.querySelector(
          `.giftset-card[data-index="${selectedIndex}"]`
        );
        if (activeCard) {
          activeCard.classList.add("active");
        }
      });
    });
  }

  const comboCarousel = document.getElementById("comboCarousel");
  const comboNextButton = document.getElementById("comboCarouselNext");
  const comboWrapper = comboCarousel
    ? comboCarousel.closest(".combo-carousel-wrapper")
    : null;

  if (comboCarousel && comboNextButton && comboWrapper) {
    const cards = comboCarousel.querySelectorAll(".combo-card");
    const totalCards = cards.length;
    let cardWidth = 0;
    let gap = 0;
    let currentIndex = 0;
    let autoScrollInterval;

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

    function scrollNext() {
      currentIndex++;
      const offset = currentIndex * (cardWidth + gap);
      comboCarousel.style.transform = `translateX(-${offset}px)`;

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

    comboNextButton.addEventListener("click", () => {
      clearInterval(autoScrollInterval);
      scrollNext();
      autoScrollInterval = setInterval(scrollNext, 3500);
    });

    function startAutoScroll() {
      autoScrollInterval = setInterval(scrollNext, 3500);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollInterval);
    }

    comboWrapper.addEventListener("mouseenter", stopAutoScroll);
    comboWrapper.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();
  }
});
