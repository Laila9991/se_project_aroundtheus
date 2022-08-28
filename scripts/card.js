class Card{

    constructor(data, cardSelector ){

    this.name = data.name;
    this._link = data.link;
 

    this._cardSelector = cardSelector;



    };



  _handleLikeIcon = () => {
    this._cardLikeButton.classList.toggle("card__button-like");
  };

  _handleTrashButton = () => {
    this._element.remove();
    this._element = null;
  };

  openPopUp = (data) => {
    this.handleImageClick(data);
  };
    

    _setEventListeners() {
        this._cardTrashButton.addEventListener("click", () =>
          this._handleTrashButton()
        );
    
        this._cardImageButton.addEventListener("click", () =>
          this.openPopUp(this._data)
        );
    
        this._cardLikeButton.addEventListener("click", () =>
          this._handleLikeIcon()
        );
      }
    

    


  
      _getTemplate = () => {
       const cardElement= document.querySelector(this._cardSelector)
          .content.querySelector(".cards")
          .cloneNode(true);
          return cardElement;

      };


      generateCard = () => { 
    this._element = this._getTemplate();


    const cardImage = this._element.querySelector(".card__image");
    const cardHeader = this._element.querySelector(".card__text");
  
    this._cardLikeButton = this._element.querySelector(".card__button-like");
  
  
    this._cardImageButton = this._element.querySelector(".button_type_image");
    
  
    this._cardTrashButton = this._element.querySelector(".button_type_trash");

    cardHeader.textContent = this._title;
    cardImage.src = this._link;
    cardImage.alt = `A Scenic Photo of ${this._title}`;



    this._setEventListeners();

    return this._element;



      };
    };








    export default Card;