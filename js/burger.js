const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuClose = mobileMenu.querySelector(".js-mobile-menu__close");
const mobileMenuWrapper = mobileMenu.querySelector(".mobile-menu__wrapper");

burger.addEventListener("click", function (evt) {
   evt.preventDefault();
   mobileMenu.classList.add("mobile-menu--active");
});

mobileMenuClose.addEventListener("click", function (evt) {
   evt.preventDefault();
   mobileMenu.classList.remove("mobile-menu--active");
});

document.addEventListener('keydown', function (evt) {
   if (evt.code == 'Escape') {
      evt.preventDefault();
      mobileMenu.classList.remove("mobile-menu--active");
   }
});

mobileMenu.addEventListener("click", function (evt) {
   const target = evt.target;
   if (!mobileMenuWrapper.contains(target)) {
      mobileMenu.classList.remove("mobile-menu--active");
   }
});
