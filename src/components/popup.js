export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".button_type_close");
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.keyCode === Escape) {
      this.close();
    }
  }
  _closeModalOnRemoteClick(evt) {
    const openedModal = document.querySelector(".popup_opened");
    if (openedModal === null) {return;}
    if (evt.target === openedModal) {
      this.close();
    };
  }
  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("mousedown", (evt) => this._closePopupOnRemoteClick(evt));
  }
}