
import { escapeKeyCode 
} from "../utils/constants.js";

export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector(".popup__close");
  }

  open() {
    this._popup.classList.add("popup_opened");
}

  close() {
    this._popup.classList.remove("popup_opened");
}



  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      // search for an opened popup
  
      // close it
      this.close();
    }
  }
  
  // create a outside click listener
  _closePopupOnRemoteClick(evt) {
  
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }

  

  setEventListeners() {
    this._popup.addEventListener("mousedown", (evt) => this._closeModalOnRemoteClick(evt));
    this._buttonClose.addEventListener("keydown",  () => this.close());

  }
}