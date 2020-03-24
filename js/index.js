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
    setErrorOnInput(formInputNodes['email'], 'Email is not valid');
    isFormValid = false;
  }

  if (formInputNodes['password'].value.length < 6) {
    setErrorOnInput(
      formInputNodes['password'],
      'Password length must be longer than 5'
    );
    isFormValid = false;
  }

  if (isFormValid) {
    alert('Form is valid! Sending data...');
    for (let inputNode in formInputNodes) {
      resetFormValues(formInputNodes[inputNode]);
    }
  }
};

const checkIfNodeEmpty = inputNode => {
  let isEmpty = false;
  if (inputNode.value.trim() === '') {
    setErrorOnInput(inputNode, 'Input can not be blank');
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

const setErrorOnInput = (input, errorMsg) => {
  const signupControl = input.parentElement;
  const errorInput = signupControl.querySelector('.error-msg');

  console.log(signupControl);
  console.log(errorInput);
  input.classList.add('signup__input--error');
  errorInput.innerText = errorMsg;
};

const resetFormValues = inputNode => {
  inputNode.value = '';
};
