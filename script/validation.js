const emailInput = document.querySelector('.email');
const checkbox = document.querySelector('.checkbox');
const checkboxWarning = document.querySelector('.checkbox-warning');
const subscribeBtn = document.querySelector('.subscribe');

let regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

subscribeBtn.addEventListener('click', () => {
  let emailValid = validateEmail()
  let checkboxValid = validateCheckbox()

  if (emailValid && checkboxValid) {
    subscribeBtn.setAttribute('type', 'submit')
  }

  function validateEmail() {
    const valid = emailInput.value.match(regexp)

    if (valid !== null) {
      emailInput.classList.remove('warning')
      return true
    } else {
      emailInput.classList.add('warning')
      return false
    }
  }

  function validateCheckbox() {
    if (checkbox.checked) {
      checkboxWarning.classList.remove('enabled')
      return true
    } else {
      checkboxWarning.classList.add('enabled')
      return false
    }
  }
})

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('warning')
})