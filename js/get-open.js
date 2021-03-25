const getOpen = function (buttonOpen, buttonClose, block, activeClass) {

   if (buttonOpen != null && buttonClose != null) {
      buttonOpen.addEventListener("click", function (evt) {
         evt.preventDefault();
         block.classList.add(activeClass);
      });
      buttonClose.addEventListener("click", function (evt) {
         evt.preventDefault();
         block.classList.remove(activeClass);
      });
   }
}

const openButton = document.querySelector(".js-button-open")
const closeButton = document.querySelector(".js-button-close")
const hiddenBlock = document.querySelector(".js-hidden-block")

getOpen(openButton, closeButton, hiddenBlock, "aside__filter--active");

const sortingLink = document.querySelector('.sorting__link');
const sortingList = document.querySelector('.sorting__list');
const sortingWrapper = document.querySelector('.sorting__wrapper')
console.log(sortingLink)
if (sortingLink != null) {
   sortingLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      sortingList.classList.toggle("sorting__list--active");
      sortingWrapper.classList.toggle('sorting__wrapper--active')
   });
}

