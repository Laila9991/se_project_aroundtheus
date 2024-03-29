export class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = document.querySelector(formEl);

    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputEls = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
  }

  _showInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }
  _hideInputError(inputEl) {
    const errorMessageEl = this._form.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }



  _checkFormValidity = () => {
    return this._inputEls.every((input) => input.validity.valid);
  };





  _toggleInputError(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
 
  toggleButtonState() {
    const isFormValid = this._checkFormValidity();
    if (!isFormValid) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
  resetValidation() {
    this.toggleButtonState();

    this._inputEls.forEach((inputElement) => {
      this._hideInputError(inputElement);
    })
  }

  _setEventListeners() {
    this._inputEls.forEach((element) => {
      element.addEventListener("input", (e) => {
        this._toggleInputError(element);
        this.toggleButtonState();
      });
    });
  }
  
  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}
export default FormValidator;