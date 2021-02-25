var swiper = new Swiper('.swiper-container-1', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 8
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1192: {
                slidesPerView: 1,
                spaceBetween: 30
            }
        }
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