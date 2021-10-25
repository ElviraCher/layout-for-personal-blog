function createSlider() {
  const slides = document.querySelectorAll(".slider__picture");

  function hideAllSlides() {
    const slidesArr = Array.prototype.slice.call(slides);
    for (let i = 0; i < slidesArr.length; i += 1) {
      slidesArr[i].style.display = "none";
    }
  }

  function showCertainSlide(i) {
    const arr = Array.prototype.slice.call(slides);
    const shownPicture = arr.splice(i, 1);
    console.log(shownPicture);
    shownPicture[0].style.display = "block";
  }

  const slide = this.querySelector(".slider");
  const prev = document.createElement("button");
  prev.classList.add("prev-button");
  const next = document.createElement("button");
  next.classList.add("next-button");
  prev.innerText = "Назад";
  next.innerText = "Вперёд";
  slide.appendChild(prev);
  slide.appendChild(next);

  let i = 0;

  hideAllSlides();
  showCertainSlide(i);

  next.addEventListener("click", () => {
    if (i + 1 === slides.length) {
      i = 0;
    } else {
      i += 1;
    }

    hideAllSlides();
    showCertainSlide(i);
  });

  prev.addEventListener("click", () => {
    if (i === 0) {
      i = slides.length - 1;
    } else {
      i -= 1;
    }

    hideAllSlides();
    showCertainSlide(i);
  });
}
document.addEventListener("DOMContentLoaded", createSlider);
