import popup from "./Popup.js"; 

export class PopupWithForm extends popup {
  constructor(popupSelector,  handleFormSubmit ) { 
    super(popupSelector); 
    this._handleSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputEls = Array.from(this._form.querySelectorAll(".popup__input"));
    this._saveButton = this._form.querySelector(".popup__button");
    this._saveButtonText = this._saveButton.value;



    
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
      this._saveButtonText.textContent = loadingText;
    } else {
      this._saveButtonText.textContent = this.__saveButtonText;
    }
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputValues = this._getInputValues();
      this._handleSubmit(inputValues);
    });
  }
}