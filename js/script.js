import "./range.js";
import "./swiper.js";
import "./jquery.mousewheel.js";
import "./jquery.jscrollpane.min.js";
import "./custom-scroll.js";
import "./filter.js";
import "./number.js";
import "./get-more-elements.js";
import "./burger.js";
import "./scroll.js";
import "./get-open.js";
import "./jquery.daterangepicker.min.js";
import "./jquery.fancybox.min.js";
import "./calendar.js";
import "./jquery.maskedinput.js";
import "./modal.js";
import "./compare.js";
import "./radio-check.js";
import "./fancybox.js";
import "./YouShallPass.js";
import "./password.js";

jQuery(function($){
  $("input[type='tel']").mask("(999) 999-9999");
});

const search = document.querySelectorAll(".js-search");
const pageHeader = document.querySelector(".js-page-header");
const mobileWidth = 1024;
const tabletWidth = 1366;
search.forEach((item) => {
  const searchInput = item.querySelector(".js-search__input");
  const searchClear = item.querySelector(".js-search__clear");
  const searchResult = item.querySelector(".js-search-result")

  searchClear.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchInput.value = "";
  });

  searchInput.addEventListener("focus", function () {
    searchResult.classList.remove("visually-hidden");
    pageHeader.classList.add("page-header--active")
  });

  searchInput.addEventListener("blur", function () {
    searchResult.classList.add("visually-hidden");
    pageHeader.classList.remove("page-header--active")
  });
});

const catalog = document.querySelector(".js-catalog");

if (catalog != null) {
  const catalogWrapper = catalog.querySelector(".js-catalog-wrapper");
  const catalogButton = catalog.querySelector(".js-catalog-button");
  const catalogItem = catalog.querySelectorAll(".catalog__item");

  if (document.body.clientWidth > mobileWidth) {
    catalog.addEventListener("mouseenter", function () {
      pageHeader.classList.add("page-header--active");
    });
    catalog.addEventListener("mouseleave", function () {
      pageHeader.classList.remove("page-header--active");
    });
  }

  catalogButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    catalogButton.classList.toggle("catalog__button--active");
    catalogWrapper.classList.toggle("catalog__wrapper--active");
    pageHeader.classList.toggle("page-header--active")
  });

  catalogItem.forEach((item) => {
    const catalogMore = item.querySelector(".catalog__more");
    const catalogList = item.querySelector(".catalog__sub-list");
    if (catalogMore != null) {
      catalogMore.addEventListener("click", function (evt) {
        evt.preventDefault();
        catalogList.classList.toggle("catalog__sub-list--active");
      });
    }

  });
}








$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = '46px';
  this.style.height = (this.scrollHeight) + 'px';
});






const lkAsideMenu = () => {
  try {
    const lkAside = document.querySelector('.lk-aside');
    const lkAsideButton = document.querySelector('.user-block__button');
    const lkAsideNav = document.querySelector('.lk-nav');

    if (document.body.clientWidth < tabletWidth) {
      lkAsideButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        lkAsideButton.classList.toggle('user-block__button--active');
        lkAsideNav.classList.toggle('lk-nav--active');
        lkAside.classList.toggle('lk-aside--active');
      });
    }
  } catch {

  }
}
lkAsideMenu();



const dropDownMenuOpen = () => {
  const dropDonwMenu = document.querySelectorAll('.js-dropdown-menu');
  dropDonwMenu.forEach((menu) => {
    const dropDonwMenuButton = menu.querySelector('.js-dropdown-button');
    const dropDonwMenuPopup = menu.querySelector('.js-dropdown-popup');

    dropDonwMenuButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      dropDonwMenuPopup.classList.toggle('dropdown__pop-up--active');
      dropDonwMenuButton.classList.toggle('dropdown__link--active')
    });

  });
};
dropDownMenuOpen();


const moreSeoText = () => {
  const seoBlock = document.querySelectorAll('.js-seo-block');
  seoBlock.forEach((block) => {
    const seoMoreButton = block.querySelector('.js-seo-more');
    const seoHidden = block.querySelectorAll('.js-seo-hidden');
    const seoText = block.querySelectorAll('.js-seo-text');

    seoMoreButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      seoMoreButton.classList.toggle('js-seo-more--hidden')
      if (seoMoreButton.classList.contains('js-seo-more--hidden')) {
        seoMoreButton.textContent = 'Скрыть'
      } else {
        seoMoreButton.textContent = 'Показать все'
      }
      seoHidden.forEach((hiddenItem) => {
        hiddenItem.classList.toggle('seo__visible');
      });

      seoText.forEach((text) => {
        text.classList.toggle('seo__text--active');
      });


    });
  });
}
moreSeoText()
