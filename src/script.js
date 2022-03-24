import "./styles/main.scss";
import "./styles/slider.scss";

(function init() {
  const iconMenu = document.querySelector(".menu__icon");

  if (iconMenu) {
    const menu = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", () => {
      document.body.classList.toggle("no-scroll");
      iconMenu.classList.toggle("menu__icon--active");
      menu.classList.toggle("menu__body--active");
    });
  }
  function showMessage() {
    const form = document.querySelector(".feedback-form__form");
    form.innerHTML = "Спасибо! Ваша заявка принята";
    form.classList.add("message");

    form.insertAdjacentHTML(
      "beforeend",
      `<br><div class="message"><a href="index.html">Вернуться на главную</a></div>`
    );
  }

  const button = document.querySelector(".feedback-form__element--button");
  button.addEventListener("click", showMessage);
})();
