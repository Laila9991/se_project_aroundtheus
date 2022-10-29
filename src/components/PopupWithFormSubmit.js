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



  renderLoading(isLoading, loadingText='Loading...') {
    const form = this._popup.querySelector(".popup__form");
  
    const saveButton = form.querySelector(".popup__button");
      if (isLoading) {
        saveButton.textContent = loadingText;
      } else {
       saveButton.textContent = 'Save'
      }
    }
}
