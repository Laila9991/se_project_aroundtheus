import { Popup } from "../components/popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);

      this._handleFormSubmit = handleFormSubmit; 
      this._form = this._popup.querySelector(".popup__form");
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