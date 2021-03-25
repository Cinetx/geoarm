const filterWrapper = document.querySelector(".js-filter");
if (filterWrapper != null) {
   const filterInput = filterWrapper.querySelectorAll("input");
   const filterDelete = document.querySelectorAll(".js-filter-delete");
   const filterList = document.querySelectorAll(".js-filter-list");

   filterDelete.forEach((button) => {
      button.addEventListener("click", function (evt) {
         evt.preventDefault();

         filterInput.forEach((input) => {

            filterList.forEach((list) => {
               console.log(list);
               const filterItem = list.querySelectorAll(".js-filter-item");
               filterItem.forEach((item) => {
                  if (item.dataset.input == input.dataset.input) {

                     item.remove();
                     input.checked = false;
                  }
               });
            });
         });
      });

   });

   function toggleInputDeleteItem() {
      filterList.forEach((list) => {
         const filterItem = list.querySelectorAll(".js-filter-item");
         filterItem.forEach((item) => {
            filterInput.forEach((input) => {
               const deleteButton = item.querySelector("button");
               deleteButton.addEventListener("click", function () {
                  if (input.dataset.input == this.dataset.input) {
                     item.remove();
                     input.checked = false;
                  }
               });
            });
         });
      });
   }
   toggleInputDeleteItem();



   filterInput.forEach((input) => {
      filterList.forEach((list) => {
         input.addEventListener("change", function () {
            if (this.checked) {
               let li = document.createElement("li");
               li.classList.add("filters-applied__item", "js-filter-item")
               li.setAttribute("data-input", this.dataset.input);
               li.innerHTML = `

             <button class="button js-filter-delete" data-input="${this.dataset.input}" type="button">
             ${this.dataset.input}
               <svg aria-hidden="true" width="9" height="9">
                  <use href="img/sprite.svg#close"></use>
               </svg>
               <span class="visually-hidden">Удалить</span>
             </button>
             `
               list.prepend(li);
               toggleInputDeleteItem();
            } else {
               const filterItem = list.querySelectorAll(".js-filter-item");
               filterItem.forEach((item) => {
                  if (item.dataset.input == this.dataset.input) {
                     item.remove();
                  }
               });
            }
         });
      });
   });
}

const filterFieldset = document.querySelectorAll(".filter__fieldset");
filterFieldset.forEach((item) => {
   const filterShowButton = item.querySelector(".filter__show");
   const filterHiddenBlock = item.querySelector(".js-filter-block-hidden");

   if (filterShowButton != null) {
      filterShowButton.addEventListener("click", function (evt) {
         evt.preventDefault();
         item.classList.toggle("filter__fieldset--hidden");
         filterHiddenBlock.classList.toggle("visually-hidden");
      });
   }
});
