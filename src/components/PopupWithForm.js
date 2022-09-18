import popup from "./popup.js"; 

export class PopupWithForm extends popup {
  constructor(popupSelector,  handleFormSubmit ) { 
    super(popupSelector); 

    this._form = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;

    this._inputEls = Array.from(this._form.querySelectorAll(".popup__input"));
    this.__saveButton = this._form.querySelector(".popup__button");
    //this._saveButtonText = this._saveButton.value;



    
  }

  _getInputValues() {
    this._Values = {};
    this._form.forEach((input) => {
      this._Values[input.name] = input.value;
    });
    return this._Values;
  }

  close() {
    this._form.reset;
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => this._handleFormSubmit());
  }
}
