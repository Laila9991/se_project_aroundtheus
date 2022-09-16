import Popup from "./popup";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupBackground = this._imagePopup.querySelector(".popup__image");
   this._imagePopupTitle = this._imagePopup.querySelector(".popup__header");
 
      }
      open(data){
        this._imagePopupBackground.src = data_link;
        this._imagePopupBackground.alt = `Photo of ${data_link}`;
        this._imagePopupTitle.textContent = data_name;
        super.open();
    }

 }