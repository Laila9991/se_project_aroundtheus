export class Card {
  constructor({ data, handleCardPopup, handleDeleteClick, handleLike, handleTrashPopup}, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._likes= data.likes;
    this._id = data._id;
    this._isLiked = false;
    this._userId= data.currentUserId;

    if (this._likes.includes(this._userId)) {
      this._isLiked = true;
    } else {
      this._isLiked = false;
    }

    this._cardSelector = cardSelector;
    this._handleCardPopup = handleCardPopup;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLike = handleLike;
    this._ownerid = data.owner._id;
    this._handleTrashPopup = handleTrashPopup;

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
    this._cardLikesCount = this._element.querySelector(".card__like-count");

    cardTitle.textContent = this._title;
    cardImage.src = this._link;
    cardImage.alt = `A Scenic Photo of ${this._title}`;

    this._cardLikesCount.textContent = `${this._likes.length}`;
    
    this._setEventListeners();

    return this._element;
  };

  updateLikes(res) {
    this.likes = res.likes;
    this._cardLikesCount.textContent = `${this.likes.length}`;
    this._cardLikeButton.classList.toggle("card__button-like_filled");
  }
  
  _handleLikeIcon = () => {
    this._isLiked = !this._isLiked;
    if (this._isLiked) {
      this._handleLike(this._id);
    } else {
      this._handleDeleteClick(this._id);
    }
  };

  _handleTrashButton() {
   // this._element.remove();
    //this._element = null;
    this.handleTrashPopup(this._id);
  
  };

  

  _checkLikeIcon = () => {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._userId) {
        this._isLiked = true;
        this._cardLikeButton.classList.toggle("card__button-like_filled");
        return;
      }
    }
  }

  _checkCardOwnerId = () => {
    if (this._userId !== this._ownerid) {
      this._cardTrashButton.remove();
      this._cardTrashButton = null;
    } else {
      return;
    }
  }

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

    this._checkCardOwnerId();
    this._checkLikeIcon();
    
  }
}
export default Card;
