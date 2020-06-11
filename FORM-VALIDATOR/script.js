const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const smallElement = formControl.querySelector('small');
  smallElement.innerText = message;
};

let showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

let getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

let checkRequired = (inputArr) => {
  inputArr.forEach((item) => {
    if (item.value.trim() === '') {
      console.log(item);
      showError(item, `${getFieldName(item)} is required`);
    } else {
      showSuccess(item);
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
});
