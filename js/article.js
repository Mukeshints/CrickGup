var swiper = new Swiper(".articleSwiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//js for fixed header
document.addEventListener("scroll", function () {
  var header = document.getElementById("headertop");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed-top");
  } else {
    header.classList.remove("fixed-top");
  }
});
