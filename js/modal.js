// Модальное окно выхода из личного кабинета
(() => {
  const modal = document.querySelectorAll(".js-modal");
  const modalOpen = document.querySelectorAll(".js-modal-open");
  const burgerMenu = document.querySelector(".burger")

  function footerHidden() {
    if (document.body.clientWidth < 1366) {
      const footer = document.querySelector("footer");
      footer.classList.remove("visually-hidden");
    }
  }

  modal.forEach((item) => {
    modalOpen.forEach((button) => {
      if (button.dataset.modal == item.dataset.modal) {
        button.addEventListener("click", function (evt) {
          evt.preventDefault();
          item.classList.remove("visually-hidden")
          burgerMenu.classList.add("burger--open");
          if (document.body.clientWidth < 1366) {
            const footer = document.querySelector("footer");
            footer.classList.add("visually-hidden");
          }
        })
      }
    });

    // закрытие через бургер
    burgerMenu.addEventListener("click", function (evt) {
      evt.preventDefault();
      item.classList.add("visually-hidden");
      footerHidden();
    });

    const modalClose = item.querySelectorAll(".js-modal-close");
    const modalShadow = item.querySelector(".modal__shadow");

    modalClose.forEach((closeButton) => {
      closeButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        item.classList.add("visually-hidden");
        footerHidden();
      })
    })
    modalShadow.addEventListener("click", function (evt) {
      const target = evt.target;
      if (target == modalShadow) {
        item.classList.add("visually-hidden");
      }
    })
    document.addEventListener('keydown', function (event) {
      if (event.code == 'Escape') {
        event.preventDefault();
        item.classList.add("visually-hidden");
        footerHidden();
      }
    });
  })
})();


