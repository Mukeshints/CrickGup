var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 5,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,

    freeMode: true,

    breakpoints: {
        "@0.00": {
            slidesPerView: 2,
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
var swiper = new Swiper(".mySwiperfooter", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    freeMode: true,
    breakpoints: {
        "@0.00": {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        "@1.00": {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next-f",
        prevEl: ".swiper-button-prev-f",
    },
});