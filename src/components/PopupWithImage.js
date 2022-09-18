import popup from "./popup.js";

export class PopupWithImage extends popup {

      constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector(".popup__image");
        this._imageCaption = this._popup.querySelector(".popup__header");
      }
      open(data){
        super.open();
        this._imagePopupBackground.src = data.link;
        this._imagePopupBackground.alt = `Photo of ${data_link}`;
        this._imagePopupTitle.textContent = data.name;
        super.open();
  
    }

 }