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
