// слайдер
const sliderWrapper = document.querySelectorAll(".js-slider-wrapper");
sliderWrapper.forEach((wrapper) => {
  const swiperContainer = wrapper.querySelector(".swiper-container");
  const sliderButtonNext = wrapper.querySelector(".js-product-swiper-button-next");
  const sliderButtonPrev = wrapper.querySelector(".js-product-swiper-button-prev");
  const mobileButtonWrapper = wrapper.querySelector(".js-button-wrapper");
  const mobileSliderButtonNext = mobileButtonWrapper.querySelector(".js-product-swiper-button-next");
  const mobileSliderButtonPrev = mobileButtonWrapper.querySelector(".js-product-swiper-button-prev");


  const swiper = new Swiper(swiperContainer, {

    spaceBetween: 20,
    simulateTouch: false,
    // Navigation arrows
    navigation: {
      nextEl: sliderButtonNext,
      prevEl: sliderButtonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: mobileSliderButtonNext,
          prevEl: mobileSliderButtonPrev,
        },
      },
      575: {
        slidesPerView: 2,
        navigation: {
          nextEl: mobileSliderButtonNext,
          prevEl: mobileSliderButtonPrev,
        },
      },
      1024: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 4,

      },
    }
  });

  const swiperContainerList = wrapper.querySelector(".swiper-container-list");
  const swiperList = new Swiper(swiperContainerList, {

    spaceBetween: 20,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: sliderButtonNext,
      prevEl: sliderButtonPrev,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 4,
      },
      1680: {
        slidesPerView: 5,
      },
    }
  });



});





var galleryThumbs = new Swiper('.img-slide__thumbs', {
  spaceBetween: 10,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 6,
    },
  },

});
var galleryTop = new Swiper('.img-slide__top', {
  spaceBetween: 0,
  slidesPerView: 1,
  navigation: {
    nextEl: '.js-img-slide-button-next',
    prevEl: '.js-img-slide-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});




const swiperContainerCompare = document.querySelectorAll(".swiper-container-compare");
const sliderButtonNext = document.querySelector(".js-product-swiper-button-next");
const sliderButtonPrev = document.querySelector(".js-product-swiper-button-prev");

// const swiperContaierCompareProduct = document.querySelector(".swiper-container-compare-product");

// const swiperCompareProduct = new Swiper(swiperContaierCompareProduct, {
//   spaceBetween: 20,
//   // slidesPerView: 5,
//   freeMode: false,


//   navigation: {
//     nextEl: sliderButtonNext,
//     prevEl: sliderButtonPrev,
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//     },
//     575: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//     1366: {
//       slidesPerView: 4,
//     },
//     1680: {
//       slidesPerView: 5,
//     },
//   }
// });

swiperContainerCompare.forEach((swiper)=>{
  const swiperCompare = new Swiper(swiper, {
    spaceBetween: 20,
    // slidesPerView: 5,
    freeMode: false,
    simulateTouch: false,


    navigation: {
      nextEl: sliderButtonNext,
      prevEl: sliderButtonPrev,
    },
    // controller: {
    //   control : swiperCompareProduct,
    //   inverse: true,
    // },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1366: {
        slidesPerView: 4,
      },
      1680: {
        slidesPerView: 5,
      },
    }
  });

  // swiperCompareProduct.controller.control = swiperCompare[0];
  // swiper.controller.control = swiperCompareProduct;
  // console.log(swiper)

})

