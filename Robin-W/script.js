document.addEventListener("DOMContentLoaded", function () {
  const userNameInput = document.getElementById("userName");
  const userEmailInput = document.getElementById("userEmail");
  const messageTextArea = document.getElementById("userMessage");

  if (userNameInput) {
    userNameInput.value = "";
  }
  if (userEmailInput) {
    userEmailInput.value = "";
  }

  if (messageTextArea) {
    messageTextArea.value = "";

    function autoResizeTextArea() {
      messageTextArea.style.height = "auto";
      let newHeight = messageTextArea.scrollHeight;
      messageTextArea.style.height = newHeight + "px";
    }

    messageTextArea.addEventListener("input", autoResizeTextArea);

    autoResizeTextArea();
  }

  const filterButtons = document.querySelectorAll(".photography-filter-btn");
  const galleries = document.querySelectorAll(".photography-gallery");

  function showGallery(filter) {
    galleries.forEach((gallery) => {
      gallery.classList.remove("active");
    });
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });

    const galleryToShow = document.getElementById(`gallery-${filter}`);
    if (galleryToShow) {
      galleryToShow.classList.add("active");
    }

    const activeButton = document.querySelector(
      `.photography-filter-btn[data-filter="${filter}"]`
    );
    if (activeButton) {
      activeButton.classList.add("active");
    }
  }

  showGallery("italy");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.dataset.filter;
      showGallery(filterValue);
    });
  });
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
  const mainNav = document.querySelector(".header-right");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("is-active");
      menuToggle.classList.toggle("is-active");

      if (mainNav.classList.contains("is-active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

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
