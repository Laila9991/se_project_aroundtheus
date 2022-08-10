const showInputError = (formEl, inputEl, validationSettings) => {
  const { inputErrorClass, errorClass } = validationSettings;
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);

  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
};
const hideInputError = (formEl, inputEl, validationSettings) => {
  const { inputErrorClass, errorClass } = validationSettings;
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
};

const toggleInputError = (formEl, inputEl, validationSettings) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, validationSettings);
  } else {
    hideInputError(formEl, inputEl, validationSettings);
  }
};

const checkFormValidity = (inputs) =>
  inputs.every((input) => input.validity.valid);

const toggleButtonState = (inputEls, submitButton, validationSettings) => {
  const isFormValid = checkFormValidity(inputEls); // note, that it checks if form is valid
  const { inactiveButtonClass } = validationSettings;


  if (!isFormValid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
};

function setEventlisteners(formEl, validationSettings) {
  const { inputSelector } = validationSettings;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(".popup__button");
  toggleButtonState(inputEls, submitButton, validationSettings);

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      toggleInputError(formEl, inputEl, validationSettings);
      toggleButtonState(inputEls, submitButton, validationSettings);
    });
  });
}

//start
function enableValidation(validationSettings) {
  const { formSelector } = validationSettings;
  const formEls = [...document.querySelectorAll(formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventlisteners(formEl, validationSettings);
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
