
const radioSection = document.querySelectorAll('.js-radio-section')

const getRadioCheck = () => {
  radioSection.forEach((section)=>{
    const radioInput = section.querySelectorAll('.js-radio-person');
    const hiddenPersonWrapper = section.querySelectorAll('.js-radio-person-hidden-wrapper')
    radioInput.forEach((radio) => {
      if (radio.checked) {
        hiddenPersonWrapper.forEach((wrapper) => {
          if (wrapper.dataset.person == radio.dataset.person) {
            wrapper.classList.remove('visually-hidden');
          } else {
            wrapper.classList.add('visually-hidden');
          }
        });
      }
    })
  })
}
getRadioCheck()

const onRadioChange = () => {
  radioSection.forEach((section) => {
    const radioInput = section.querySelectorAll('.js-radio-person');
    radioInput.forEach((radio) => {
      radio.addEventListener('change', getRadioCheck);
    })
  })

}

onRadioChange();
