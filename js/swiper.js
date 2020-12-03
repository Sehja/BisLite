var swiper = new Swiper('.swiper-container-1', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

var swiper = new Swiper('.swiper-container-2', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });