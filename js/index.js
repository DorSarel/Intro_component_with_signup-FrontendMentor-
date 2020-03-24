const form = document.querySelector('.signup__form');

const validateForm = () => {
  const formInputNodes = {
    firstName: form['first_name'],
    lastName: form['last_name'],
    email: form['user_email'],
    password: form['user_password'],
  };
  let isFormValid = true;

  for (let inputNode in formInputNodes) {
    isFormValid = !checkIfNodeEmpty(formInputNodes[inputNode]) && isFormValid;
  }

  if (!isEmailValid(formInputNodes['email'].value)) {
    formInputNodes['email'].classList.add('signup__input--error');
    isFormValid = false;
  }

  if (formInputNodes['password'].value.length < 6) {
    formInputNodes['password'].classList.add('signup__input--error');
    isFormValid = false;
  }

  if (isFormValid) {
    alert('Form is valid! Sending data...');
  }
};

const checkIfNodeEmpty = inputNode => {
  let isEmpty = false;
  if (inputNode.value.trim() === '') {
    inputNode.classList.add('signup__input--error');
    return true;
  } else {
    inputNode.classList.remove('signup__input--error');
  }
  return isEmpty;
};

const isEmailValid = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener('submit', e => {
  e.preventDefault();
  validateForm();
});
