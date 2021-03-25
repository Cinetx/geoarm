const ysp = new YouShallPass("•", 800);

const passwordInput = document.querySelectorAll('.js-password-input');
passwordInput.forEach((input)=>{
  input.addEventListener('input', ysp.keyboardInputHandle.bind(ysp));

});

