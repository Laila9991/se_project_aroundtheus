import Popup from "./Popup.js"; 

export class PopupWithForm extends Popup {
  constructor(popupSelector,  handleFormSubmit ) { 
    super(popupSelector); 
    this._handleSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputEls = Array.from(this._form.querySelectorAll(".popup__input"));
    this._saveButton = this._form.querySelector(".popup__button");



    
  }

  _getInputValues() {
    const formValues = {};
    this._inputEls.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  close() {
    this._form.reset();
    super.close();
  }


  renderLoading(isLoading, loadingText='Saving...') {
    if (isLoading) {
      this._saveButton.textContent = loadingText;
    } else {
     this._saveButton.textContent = 'Save'
    }
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.renderLoading(true);

      const inputValues = this._getInputValues();
      this._handleSubmit(inputValues);
    });
  }
}