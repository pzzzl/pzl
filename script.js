const hideCarouselOnMobile = true;
const carousel = document.getElementById("mainCarousel");

function displayFunnyMessage() {
  const styledMessage = "%cCaution! Mischievous robots may be on the loose! 🤖";
  const styles = "color: red; font-size: 18px;";
  console.log(styledMessage, styles);
}

function hideCarousel(hide = hideCarouselOnMobile) {
  if (hide) {
    carousel.classList.add("d-none", "d-sm-block");
  }
}

displayFunnyMessage();
hideCarousel();

$(document).ready(function () {
  // Fecha a navegação ao clicar em um link
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
