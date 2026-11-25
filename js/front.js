const frontSliders = [
  {
    slider: ".front__articles-slider",
    prev: "[data-articles-prev]",
    next: "[data-articles-next]",
    options: {
      loop: true,
      slides: { perView: 1 },
      breakpoints: {
        "(min-width: 500px)": {
          slides: {
            perView: 2,
            spacing: 16,
          },
        },
        "(min-width: 770px)": {
          slides: {
            perView: 3,
            spacing: 16,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 16,
          },
        },
        "(min-width: 1920px)": {
          slides: {
            perView: 3,
            spacing: 24,
          },
        },
      },
    },
  },
  {
    slider: ".front__conferences-slider",
    prev: "[data-conferences-prev]",
    next: "[data-conferences-next]",
    options: {
      loop: true,
      slides: { perView: 1 },
      breakpoints: {
        "(min-width: 500px)": {
          slides: {
            perView: 1,
            spacing: 16,
          },
        },
        "(min-width: 770px)": {
          slides: {
            perView: 1,
            spacing: 16,
          },
        },
      },
    },
  },
];

frontSliders.forEach(({ slider, prev, next, options }) => {
  const element = document.querySelector(slider);

  if (!element || !window.KeenSlider) return;

  const instance = new KeenSlider(element, options);

  document
    .querySelector(prev)
    ?.addEventListener("click", () => instance.prev());
  document
    .querySelector(next)
    ?.addEventListener("click", () => instance.next());
});
