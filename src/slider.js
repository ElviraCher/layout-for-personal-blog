function createSlider() {
  const slides = this.querySelectorAll(".slider__picture");
  const slidesArr = Array.prototype.slice.call(slides);
  let currentSlideNumber = 0;

  const slide = this.querySelector(".slider");
  const prev = document.createElement("button");
  prev.classList.add("prev-button");
  const next = document.createElement("button");
  next.classList.add("next-button");
  prev.innerText = "Назад";
  next.innerText = "Вперёд";
  slide.appendChild(prev);
  slide.appendChild(next);

  function hideAllSlides() {
    for (let i = 0; i < slidesArr.length; i += 1) {
      slidesArr[i].classList.add("hidden__slide");
    }
  }

  function showCertainSlide(i) {
    if (slidesArr[i]) {
      slidesArr[i].classList.toggle("hidden__slide");
    }
  }

  function makesDefaultSliderPoints() {
    const points = document.querySelectorAll(".slider__points");
    const pointsArr = Array.prototype.slice.call(points);

    for (let i = 0; i < pointsArr.length; i += 1) {
      const pointToChange = pointsArr[i].classList.contains(
        "slider__points-active"
      );
      if (pointToChange) {
        pointsArr[i].classList.remove("slider__points-active");
      }
    }
  }

  function showActiveSliderPoint(i) {
    const points = document.querySelectorAll(".slider__points");
    const pointsArr = Array.prototype.slice.call(points);
    if (pointsArr[i]) {
      pointsArr[i].classList.add("slider__points-active");
    }
  }

  function initSlideAntPointChange(slideNumber) {
    hideAllSlides();
    showCertainSlide(slideNumber);
    makesDefaultSliderPoints();
    showActiveSliderPoint(slideNumber);
  }

  function showNextSlide() {
    if (currentSlideNumber + 1 === slides.length) {
      currentSlideNumber = 0;
    } else {
      currentSlideNumber += 1;
    }
    initSlideAntPointChange(currentSlideNumber);
  }

  function showPreviousSlide() {
    if (currentSlideNumber === 0) {
      currentSlideNumber = slides.length - 1;
    } else {
      currentSlideNumber -= 1;
    }
    initSlideAntPointChange(currentSlideNumber);
  }

  function createSliderPoints() {
    const pointContainer = document.createElement("div");
    pointContainer.classList.add("points__container");
    for (let i = 0; i < slides.length; i += 1) {
      const point = document.createElement("div");
      const number = document.createTextNode(`${i}`);
      pointContainer.appendChild(point);
      point.appendChild(number);
      point.classList.add("slider__points");
      slide.appendChild(pointContainer);
    }
  }

  function changeActiveSliderPoint(event) {
    const { target } = event;
    const number = +target.innerText;
    if (target.tagName === "DIV") {
      currentSlideNumber = number;
      initSlideAntPointChange(currentSlideNumber);
    }
  }

  createSliderPoints();
  initSlideAntPointChange(currentSlideNumber);

  next.addEventListener("click", showNextSlide);

  prev.addEventListener("click", showPreviousSlide);

  const pointContainer = this.querySelector(".points__container");

  pointContainer.addEventListener("click", changeActiveSliderPoint);

  window.setInterval(showNextSlide, 3000);
}

document.addEventListener("DOMContentLoaded", createSlider);
