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
})();
