import { openPopup } from "./utils.js";


class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;

    this._cardLikeButton = null;

    this._cardImageButton = null;

    this._cardTrashButton = null;

  }

  _setEventListeners() {
    this._cardTrashButton = this._element.querySelector(".button_type_trash");
    this._cardTrashButton.addEventListener("click", () =>
      this._handleTrashButton()
    );

    this._cardImageButton = this._element.querySelector(".button_type_image");
    this._cardImageButton.addEventListener("click", () =>
      this._handlePreviewPicture()
    );

    this._cardLikeButton = this._element.querySelector(".card__button-like");
    this._cardLikeButton.addEventListener("click", () =>
      this._handleLikeIcon()
    );
  }

  _handleLikeIcon()  {
    this._cardLikeButton.classList.toggle("card__button-like");
  }

  _handleTrashButton() {
    this._element.remove();
    this._element = null;
  }



  _handlePreviewPicture() {
    const imagePopup = document.querySelector("#content__popup");
    const imagePopupBackground = imagePopup.querySelector(".popup__image");
    const imagePopupTitle = imagePopup.querySelector(".popup__header");

    imagePopupBackground.src = this._link;
    imagePopupBackground.alt = `Photo of ${this.link}`;
    imagePopupBackground.textContent = this.name;
    openPopup(imagePopup);
  }

  _getTemplate = () => {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__content")
      .cloneNode(true);
  };

  generateCard = () => {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardHeader = this._element.querySelector(".card__text");

    cardHeader.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = `A Scenic Photo of ${this._name}`;

    return this._element;
  };
}

export default Card;
