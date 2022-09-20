import popup from "./popup.js";

export class PopupWithImage extends popup {

      constructor(popupSelector) {
        super(popupSelector);
        this._imageElement = this._popup.querySelector(".popup__image");
        this._imageCaption = this._popup.querySelector(".popup__header");
      }
    
      open(data) {
        this._imageElement.src = data.link;
        this._imageElement.alt = `A full size view of ${data.name}`;
        this._imageCaption.textContent = data.name;
        super.open();
      }
    }

 

