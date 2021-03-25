const getMoreElements = (hiddenClass)=>{
  const moreWrapper = document.querySelectorAll(".js-more-wrapper");
  moreWrapper.forEach((wrapper) => {
    const moreItem = wrapper.querySelectorAll(".js-more-item");
    const moreButton = wrapper.querySelector(".js-more-button");
    let buttonText = moreButton.innerHTML;
    moreItem.forEach((item) => {

      moreButton.addEventListener("click", function (evt) {

        if (item.classList.contains(hiddenClass)) {
          evt.preventDefault();
          item.classList.remove(hiddenClass);
          item.classList.add("js-more-item-hidden");
          this.innerHTML = "Скрыть";
        } else if (!item.classList.contains(hiddenClass)) {
          if (item.classList.contains("js-more-item-hidden")) {
            evt.preventDefault();
            item.classList.add(hiddenClass);
            item.classList.remove("js-more-item-hidden");
            this.innerHTML = buttonText;
          }
        }
      })
    });
  });
}
getMoreElements("visually-hidden")
getMoreElements("card-nav__item--hidden")

