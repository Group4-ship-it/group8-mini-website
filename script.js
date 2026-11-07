// Toggle the hamburger menu on small screens
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("menu-toggle");
  var links = document.getElementById("nav-links");
  btn.addEventListener("click", function () {
    links.classList.toggle("open");
  });
});
