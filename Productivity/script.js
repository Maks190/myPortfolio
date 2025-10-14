document.addEventListener("DOMContentLoaded", () => {
  // --- НАЧАЛО: Код для слайдера "Our Resources" ---
  const sliderContainer = document.querySelector(".resources-slider-wrapper"); // Изменено на общий контейнер для слайдера

  if (sliderContainer) {
    const track = sliderContainer.querySelector(".slides-track");
    // Важно: sliderViewport теперь между wrapper и track, но для JS это не меняет логику поиска track
    const slides = track ? Array.from(track.children) : [];
    const nextButton = sliderContainer.querySelector(".next-arrow");
    const prevButton = sliderContainer.querySelector(".prev-arrow");
    // Контейнер пагинации находится вне sliderContainer, ищем его от document
    const dotsContainer = document.querySelector(".slider-pagination");
    const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

    if (slides.length > 0) {
      // Получаем ширину видимой области слайдера (viewport)
      const sliderViewport = sliderContainer.querySelector(".slider-viewport");
      const slideWidth = sliderViewport
        ? sliderViewport.offsetWidth
        : slides[0].offsetWidth;

      let currentIndex = 0;
      let autoSlideInterval;
      const autoSlideTime = 5000; // 5 секунд

      const goToSlide = (slideIndex, isAuto = false) => {
        if (!track) return;

        if (!isAuto) {
          stopAutoSlide();
        }

        // slideWidth теперь это ширина одного слайда (равна ширине viewport)
        track.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        currentIndex = slideIndex;
        updateDots();

        if (!isAuto) {
          startAutoSlide();
        }
      };

      const updateDots = () => {
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add("active");
          } else {
            dot.classList.remove("active");
          }
        });
      };

      const nextSlide = (isTriggeredByAuto = false) => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
          nextIndex = 0;
        }
        goToSlide(nextIndex, isTriggeredByAuto);
      };

      const prevSlide = () => {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
          prevIndex = slides.length - 1;
        }
        goToSlide(prevIndex);
      };

      const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => nextSlide(true), autoSlideTime);
      };

      const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
      };

      if (nextButton) {
        nextButton.addEventListener("click", () => nextSlide());
      }
      if (prevButton) {
        prevButton.addEventListener("click", prevSlide);
      }

      dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          const slideTo = parseInt(e.target.dataset.slideTo);
          if (!isNaN(slideTo)) {
            goToSlide(slideTo);
          }
        });
      });

      updateDots();

      // Устанавливаем начальное положение и подсветку точек
      if (track) {
        // Проверяем, что track существует
        goToSlide(0, true); // Инициализируем положение без сброса таймера
      }
      startAutoSlide();

      if (sliderContainer) {
        // Используем sliderContainer для остановки/запуска
        sliderContainer.addEventListener("mouseenter", stopAutoSlide);
        sliderContainer.addEventListener("mouseleave", startAutoSlide);
      }
    }
  }
  // --- КОНЕЦ: Код для слайдера "Our Resources" ---

  const testimonialSliderArea = document.querySelector(
    ".testimonials-slider-area"
  );

  if (testimonialSliderArea) {
    const testimonialViewport = testimonialSliderArea.querySelector(
      ".testimonial-slider-viewport"
    );
    const testimonialTrack = testimonialSliderArea.querySelector(
      ".testimonial-slides-track"
    );
    const testimonialSlides = testimonialTrack
      ? Array.from(testimonialTrack.children)
      : [];
    const testimonialDotsContainer = testimonialSliderArea.querySelector(
      ".testimonial-slider-pagination"
    );
    const testimonialDots = testimonialDotsContainer
      ? Array.from(testimonialDotsContainer.children)
      : [];

    if (
      testimonialSlides.length > 0 &&
      testimonialViewport &&
      testimonialTrack
    ) {
      let currentTestimonialIndex = 0;
      let autoTestimonialSlideInterval;
      const autoTestimonialSlideTime = 5000;

      // Ширина одного полного слайда (будет равна ширине viewport)
      // Viewport будет настроен так, чтобы вместить активный слайд и часть следующего
      let viewportWidth = testimonialViewport.offsetWidth;
      let slideWidth = testimonialSlides[0].offsetWidth; // Ширина .testimonial-slide

      const setupTestimonialSlider = () => {
        // Каждый слайд должен быть по ширине viewport
        // А сам viewport должен быть достаточно широк, чтобы показать 1 слайд + часть следующего
        // Допустим, активный слайд занимает 80% viewport, а 20% - для выглядывания следующего.
        // Но так как у нас overflow:hidden на viewport, мы будем двигать track.

        slideWidth = testimonialSlides[0].offsetWidth; // Ширина каждого .testimonial-slide (должна быть равна ширине видимой части)

        // Если мы хотим, чтобы основной слайд занимал, скажем, 80% области слайдера,
        // а 20% - выглядывающий, то viewport должен быть шириной с один слайд.
        // В CSS .testimonial-card сейчас 90% от .testimonial-slide.
        // .testimonial-slide - 100% от .testimonial-slider-viewport
        // .testimonial-slider-viewport - overflow:hidden

        // Убедимся, что каждый слайд имеет ширину viewport'а
        viewportWidth = testimonialViewport.offsetWidth;
        testimonialSlides.forEach((slide) => {
          slide.style.width = `${viewportWidth}px`;
        });
        testimonialTrack.style.width = `${
          viewportWidth * testimonialSlides.length
        }px`;

        goToTestimonialSlide(currentTestimonialIndex, true);
      };

      const setSlideStyles = (activeIndex) => {
        testimonialSlides.forEach((slide, index) => {
          slide.classList.remove("active-slide", "next-slide-preview");
          if (index === activeIndex) {
            slide.classList.add("active-slide");
          }
          // Для эффекта "выглядывания" следующего слайда, если он есть
          // Этот CSS .next-slide-preview должен применяться только к слайду, который действительно выглядывает.
          // При overflow:hidden на viewport, этот класс становится менее актуальным для "выглядывания",
          // но его можно использовать для стилизации неактивных слайдов, если они когда-либо станут видны
          // (например, при более сложной карусели).
          // Сейчас, с overflow:hidden, мы увидим только активный слайд.
        });
      };

      const goToTestimonialSlide = (slideIndex, isAuto = false) => {
        if (
          !testimonialTrack ||
          slideIndex < 0 ||
          slideIndex >= testimonialSlides.length
        )
          return;

        if (!isAuto) {
          stopAutoTestimonialSlide();
        }

        const offset = slideIndex * viewportWidth; // Используем viewportWidth для смещения
        testimonialTrack.style.transform = `translateX(-${offset}px)`;
        currentTestimonialIndex = slideIndex;
        updateTestimonialDots();
        setSlideStyles(slideIndex); // Применяем стили (класс active-slide)

        if (!isAuto) {
          startAutoTestimonialSlide();
        }
      };

      const updateTestimonialDots = () => {
        testimonialDots.forEach((dot, index) => {
          dot.classList.toggle("active", index === currentTestimonialIndex);
          dot.dataset.slideTo = index;
        });
      };

      const nextTestimonialSlide = (isTriggeredByAuto = false) => {
        let nextIndex =
          (currentTestimonialIndex + 1) % testimonialSlides.length;
        goToTestimonialSlide(nextIndex, isTriggeredByAuto);
      };

      const startAutoTestimonialSlide = () => {
        stopAutoTestimonialSlide();
        autoTestimonialSlideInterval = setInterval(
          () => nextTestimonialSlide(true),
          autoTestimonialSlideTime
        );
      };

      const stopAutoTestimonialSlide = () => {
        clearInterval(autoTestimonialSlideInterval);
      };

      testimonialDots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          const slideTo = parseInt(e.target.dataset.slideTo);
          if (!isNaN(slideTo) && slideTo !== currentTestimonialIndex) {
            goToTestimonialSlide(slideTo);
          }
        });
      });

      setupTestimonialSlider();
      window.addEventListener("resize", setupTestimonialSlider);

      startAutoTestimonialSlide();

      if (testimonialSliderArea) {
        // Используем testimonialSliderArea для mouseenter/leave
        testimonialSliderArea.addEventListener(
          "mouseenter",
          stopAutoTestimonialSlide
        );
        testimonialSliderArea.addEventListener(
          "mouseleave",
          startAutoTestimonialSlide
        );
      }
    }
  }
  // --- КОНЕЦ: Код для слайдера "Testimonials" ---

  // --- НАЧАЛО: Код для FAQ аккордеона ---
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionButton = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (questionButton && answer) {
      questionButton.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Закрыть все другие открытые элементы
        faqItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active");
            otherItem
              .querySelector(".faq-question")
              .setAttribute("aria-expanded", "false");
            const otherAnswer = otherItem.querySelector(".faq-answer");
            otherAnswer.style.maxHeight = null;
            otherAnswer.setAttribute("aria-hidden", "true");
            otherAnswer.style.paddingTop = "0px";
            otherAnswer.style.paddingBottom = "0px";
          }
        });

        // Открыть/закрыть текущий элемент
        if (isActive) {
          item.classList.remove("active");
          questionButton.setAttribute("aria-expanded", "false");
          answer.style.maxHeight = null;
          answer.setAttribute("aria-hidden", "true");
          answer.style.paddingTop = "0px";
          answer.style.paddingBottom = "0px";
        } else {
          item.classList.add("active");
          questionButton.setAttribute("aria-expanded", "true");
          answer.setAttribute("aria-hidden", "false");
          // Устанавливаем padding перед расчетом scrollHeight для корректной анимации
          answer.style.paddingTop = "5px"; // Значение из CSS
          answer.style.paddingBottom = "30px"; // Значение из CSS
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    }
  });
  // --- КОНЕЦ: Код для FAQ аккордеона ---
});
