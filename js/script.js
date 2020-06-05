var servicesControls = document.querySelector(".services__controls");
var servicesLinks = document.querySelectorAll(".services__switch");
var servicesItems = document.querySelectorAll(".services__item");

servicesControls.addEventListener("click", function (evt) {
  evt.preventDefault();
  var target = evt.target;
  console.log(target);
  if(target.classList.contains("services__switch")) {
    for(var i = 0; i < servicesItems.length; i++) {
      servicesItems[i].classList.remove("services__item-show");
      servicesLinks[i].classList.remove("services__switch-active");
    }
    target.classList.add("services__switch-active");
    var currentItem = document.querySelector(".services__item-" + target.id);
    currentItem.classList.add("services__item-show");
  }
});

var showNavigationLink = document.querySelector(".catalog-button"),
showNavigation = document.querySelector(".site-nav__sublist");

showNavigationLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  showNavigation.classList.toggle("sublist-visible");
});
