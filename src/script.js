import "./styles/style.css";
import image0 from "./img/zeliboba.jpg";
import image1 from "./img/story-picture1.jpg";
import image2 from "./img/story-picture2.jpg";
import image3 from "./img/story-picture3.jpg";
import image4 from "./img/story-picture4.jpg";
import image5 from "./img/story-picture5.jpg";
import image6 from "./img/story-picture6.jpg";
import image7 from "./img/story-picture7.jpg";
import image8 from "./img/story-picture8.jpg";
import image9 from "./img/little-prince.jpg";
import image10 from "./img/lp-and-rose.jpg";
import image11 from "./img/lp-and-fox.jpg";

(function () {
  const logoImage = new Image();
  logoImage.src = image0;
  logoImage.classList.add("header__img");
  const logo = document.querySelector(".header__logo");
  logo.appendChild(logoImage);

  function addImages(images, parentClass, childClass) {
    let i = 1;
    const parentElement = document.querySelector(parentClass);
    if (parentElement) {
      images.forEach((img) => {
        const element = document.querySelector(`${parentClass}-${i}`);
        i += 1;
        const image = new Image();
        image.src = img;
        image.classList.add(childClass);
        element.appendChild(image);
      });
    }
  }
  const blogImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  const storyImages = [image9, image10, image11];
  addImages(storyImages, ".story__container", "story__picture");
  addImages(blogImages, ".stories-block__img-container", "stories-block__img");
})();
