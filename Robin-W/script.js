document.addEventListener("DOMContentLoaded", function () {
  // --- Очистка полей формы и сброс высоты textarea при загрузке страницы ---
  const userNameInput = document.getElementById("userName");
  const userEmailInput = document.getElementById("userEmail");
  const messageTextArea = document.getElementById("userMessage");

  // Очищаем текстовые поля
  if (userNameInput) {
    userNameInput.value = "";
  }
  if (userEmailInput) {
    userEmailInput.value = "";
  }

  // Логика для textarea (очистка и авто-размер)
  if (messageTextArea) {
    messageTextArea.value = ""; // Очищаем содержимое textarea

    function autoResizeTextArea() {
      messageTextArea.style.height = "auto"; // Сброс высоты для корректного пересчета
      let newHeight = messageTextArea.scrollHeight;
      messageTextArea.style.height = newHeight + "px"; // Установка новой высоты
    }

    messageTextArea.addEventListener("input", autoResizeTextArea);

    // Вызываем autoResizeTextArea один раз при загрузке,
    // чтобы установить правильную начальную высоту для пустого поля (согласно min-height)
    autoResizeTextArea();
  }

  // --- Начало твоего существующего кода для галереи ---
  // Находим все кнопки-фильтры
  const filterButtons = document.querySelectorAll(".photography-filter-btn");
  // Находим все галереи
  const galleries = document.querySelectorAll(".photography-gallery");

  // Функция для отображения выбранной галереи и активации кнопки
  function showGallery(filter) {
    // Сначала скрываем все галереи и деактивируем все кнопки
    galleries.forEach((gallery) => {
      gallery.classList.remove("active");
    });
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });

    // Находим нужную галерею по ID и показываем ее
    const galleryToShow = document.getElementById(`gallery-${filter}`);
    if (galleryToShow) {
      galleryToShow.classList.add("active");
    }

    // Находим нужную кнопку по data-filter и активируем ее
    const activeButton = document.querySelector(
      `.photography-filter-btn[data-filter="${filter}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }

  // Устанавливаем галерею "Italy" активной по умолчанию при загрузке страницы
  showGallery("italy"); // Италия активна по умолчанию

  // Добавляем обработчик клика на каждую кнопку
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.dataset.filter; // Получаем значение data-filter кнопки
      showGallery(filterValue);
    });
  });
  // --- Конец твоего существующего кода для галереи ---
  const headerNavLinks = document.querySelectorAll(
    ".header-right ul li a[data-target-section]"
  );
  const siteHeader = document.querySelector(".site-header");
  let headerHeight = 0;
  if (siteHeader) {
    headerHeight = siteHeader.offsetHeight;
  }
  const triggerOffset = 50;

  const pageSections = [];
  headerNavLinks.forEach((link) => {
    const targetId = link.getAttribute("data-target-section");
    const section = document.getElementById(targetId);
    if (section) {
      let triggerElement = null;
      if (targetId === "section-experience") {
        triggerElement = section.querySelector(".worked-subtitle");
      } else if (targetId === "section-work") {
        triggerElement = section.querySelector(".projects-subtitle");
      } else if (targetId === "section-photography") {
        triggerElement = section.querySelector(".photography-title");
      } else if (targetId === "section-contact") {
        triggerElement = section.querySelector(".get-started-title");
      }

      if (triggerElement) {
        pageSections.push({
          linkId: link.id,
          sectionElement: section,
          triggerElement: triggerElement,
        });
      }
    }
  });

  function updateActiveNavLink() {
    let currentActiveLinkId = null;
    const activationThreshold = headerHeight + triggerOffset;

    for (let i = pageSections.length - 1; i >= 0; i--) {
      const sectionData = pageSections[i];
      const triggerRect = sectionData.triggerElement.getBoundingClientRect();

      if (triggerRect.top <= activationThreshold) {
        currentActiveLinkId = sectionData.linkId;
        break;
      }
    }

    headerNavLinks.forEach((link) => {
      if (link.id === currentActiveLinkId) {
        link.classList.add("header-link-active");
      } else {
        link.classList.remove("header-link-active");
      }
    });
  }

  headerNavLinks.forEach((link) => {
    link.classList.remove("header-link-active");
  });

  window.addEventListener("scroll", updateActiveNavLink);
  window.addEventListener("resize", updateActiveNavLink);

  setTimeout(updateActiveNavLink, 100);

  const menuToggle = document.getElementById("mobile-menu");
  const mainNav = document.querySelector(".header-right"); // Находим твою основную навигацию

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("is-active"); // Переключаем класс для показа/скрытия меню
      menuToggle.classList.toggle("is-active"); // Переключаем класс для анимации бургера в крестик

      // Опционально: блокировка скролла страницы, когда меню открыто
      if (mainNav.classList.contains("is-active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Закрытие меню при клике на ссылку (для SPA-подобной навигации)
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("is-active")) {
          mainNav.classList.remove("is-active");
          menuToggle.classList.remove("is-active");
          document.body.style.overflow = "";
        }
      });
    });
  }
});
