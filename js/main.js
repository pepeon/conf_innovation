const accordions = document.querySelectorAll(".accordeons .accordion");

accordions.forEach((accordion) => {
  const icon = accordion.querySelector(".accordion-icon");
  if (!icon) return;

  const updateIcon = () => {
    icon.style.transform = accordion.open ? "rotate(-45deg)" : "rotate(0deg)";
  };

  icon.style.transition = "transform 0.2s ease";
  updateIcon();

  accordion.addEventListener("toggle", updateIcon);
});

const partnersSlider = document.querySelector(".partners__slider");

if (partnersSlider && window.KeenSlider) {
  const slider = new KeenSlider(partnersSlider, {
    loop: false,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      // От 768px и выше (планшеты)
      '(min-width: 770px)': {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      // От 1024px и выше (десктопы)
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      // От 1440px и выше (широкие экраны)
      '(min-width: 1920px)': {
        slides: {
          perView: 4,
          spacing: 24,
        },
      },
    },
  });

  document
    .querySelector("[data-partners-prev]")
    ?.addEventListener("click", () => slider.prev());
  document
    .querySelector("[data-partners-next]")
    ?.addEventListener("click", () => slider.next());
}

const organisersSlider = document.querySelector(".organisers__slider");

if (organisersSlider && window.KeenSlider) {
  const slider = new KeenSlider(organisersSlider, {
    loop: true,
    slides: { perView: 1, spacing: 16 },
  });

  document
    .querySelector("[data-organisers-prev]")
    ?.addEventListener("click", () => slider.prev());
  document
    .querySelector("[data-organisers-next]")
    ?.addEventListener("click", () => slider.next());
}

const burger = document.querySelector(".site-header__burger");
const nav = document.querySelector(".nav");
const mainNav = document.querySelector(".site-header__inner");

if (burger && nav) {
  const closeNav = () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    mainNav.style.borderBottomLeftRadius = '16px';
    mainNav.style.borderBottomRightRadius = '16px';
  };

  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeNav();
    } else {
      mainNav.style.borderBottomLeftRadius = '0px';
      mainNav.style.borderBottomRightRadius = '0px';
      nav.classList.add("is-open");
      burger.setAttribute("aria-expanded", "true");
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest(".nav__link")) closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 770) closeNav();
  });
}