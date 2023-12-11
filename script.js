function displayFunnyMessage() {
  const styledMessage = "%cCaution! Mischievous robots may be on the loose! 🤖";
  const styles = "color: red; font-size: 18px;";
  console.log(styledMessage, styles);
}

displayFunnyMessage();

$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInLeft");
      entry.target.offsetWidth;
    }
  });
});

document.querySelectorAll(".animate-on-scroll").forEach((element) => {
  observer.observe(element);
});