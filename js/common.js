$(function(){
    // 더 특별한 혜택
    var benefitSwiper = new Swiper(".benefitSwiper", {
        slidesPerView: 5,
    });

    // 프리티 BEST 요금제
    var bestSwiper = new Swiper(".bestSwiper", {
        slidesPerView: 2,
        navigation: {
            nextEl: ".bestSwiper .swiper-button-next",
            prevEl: ".bestSwiper .swiper-button-prev",
        },
    });
});