const compareProduct = document.querySelectorAll('.js-compare-product');
const setCompareItemHeight = (index) => {

  try {
    const compareItemHeight = [];
    const compareItemLine = [];
    compareProduct.forEach((product) => {
      const compareList = product.querySelector('.js-compare-list');
      const compareItem = compareList.querySelectorAll('.compare__item')[index];
      compareItemHeight.push(compareItem.clientHeight);
      compareItemLine.push(compareItem);
      compareItemLine.forEach((item)=>{
        item.addEventListener('mouseenter', ()=>{
          compareItemLine.forEach((item)=>{
            item.classList.add('compare__item--hover');
          });
        });

        item.addEventListener('mouseleave', ()=>{
          compareItemLine.forEach((item)=>{
            item.classList.remove('compare__item--hover');
          });
        });

      });
    });

    compareProduct.forEach((product) => {
      const compareList = product.querySelector('.js-compare-list');
      const compareItem = compareList.querySelectorAll('.compare__item')[index];
      const maxHeight = Math.max(...compareItemHeight);
      compareItem.style.minHeight = `${maxHeight}px`;
    })


  } catch {

  }
}


const getCompareItemAmount = () => {
  compareProduct.forEach((product) => {
    const compareList = product.querySelector('.js-compare-list');
    const compareItemLength = compareList.querySelectorAll('.compare__item').length;
    for (let i = 0; i < compareItemLength; i++) {
      setCompareItemHeight(i);
    }

  })
}
getCompareItemAmount();



