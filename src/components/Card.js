export class Card {
  constructor({ data, handleCardPopup, handleDeleteClick, handleLike,}, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._likes= data.likes;
    this._id = data._id;
    this._isLiked = false;

    this._cardSelector = cardSelector;
    this._handleCardPopup = handleCardPopup;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
  }

  _getTemplate = () => {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__content")
      .cloneNode(true);
  };
  generateCard = () => {
    this._element = this._getTemplate();

    const cardTitle = this._element.querySelector(".card__text");
    const cardImage = this._element.querySelector(".card__image");
    this._cardLikeButton = this._element.querySelector(".card__button-like");
    this._cardTrashButton = this._element.querySelector(".button_type_trash");
    this._cardImageButton = this._element.querySelector(".button_type_image");
    this._cardLikesCount = this._element.querySelector(".card__footer-likes");

    cardTitle.textContent = this._title;
    cardImage.src = this._link;
    cardImage.alt = `A Scenic Photo of ${this._title}`;

    this._cardLikesCount.textContent = `${this._likes.length}`;
    
    this._setEventListeners();

    return this._element;
  };

  _handleLikeIcon = () => {
    this._cardLikeButton.classList.toggle("card__button-like_filled");
    this._isLiked = !this._isLiked;
    if (this._isLiked) {
      this._handleLike(this._id);
    } else {
      this._handleDeleteClick(this._id);
    }
  };

  

  _handleTrashButton() {
    this._element.remove();
    this._element = null;
  };


  _setEventListeners() {
    this._cardTrashButton.addEventListener("click", () =>
      this._handleTrashButton()
    );

    this._cardImageButton.addEventListener("click", () =>
      this._handleCardPopup({name: this._title, link: this._link })
    );

    this._cardLikeButton.addEventListener("click", () =>
      this._handleLikeIcon()
    );
    
  }
}
export default Card;
