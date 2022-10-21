import Popup from  './Popup.js';

export class PopupWithFormSubmit extends Popup {
  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (event) => {
      event.preventDefault();

      this._handleSubmitCallback();
    });
  }
}
