const initialCards = [
  {
    name: "Yosemite Valley ",
    linke: "https://code.s3.yandex.net/web-code/yosemite.jpg ",
  },

  {
    name: "Lake Louise ",
    linke: "https://code.s3.yandex.net/web-code/lake-louise.jpg  ",
  },
  {
    name: "Bald Mountains ",
    linke: "https://code.s3.yandex.net/web-code/bald-mountains.jpg ",
  },
  {
    name: "Latemar ",
    linke: "https://code.s3.yandex.net/web-code/latemar.jpg ",
  },

  {
    name: "Vanoise National Park ",
    linke: " https://code.s3.yandex.net/web-code/vanoise.jpg ",
  },

  {
    name: "Lago di Braies ",
    linke: "https://code.s3.yandex.net/web-code/lago.jpg  ",
  },
];

/*
 ** Query selectors
 */
//template

//header


const headerName = document.querySelector(".profile__name");
const headerDescription = document.querySelector(".profile__description");

const editBtn = document.querySelector(".profile__button-edit");
const profileEditPopup= document.querySelector("#edit-popup");
const profileEditCloseButtton= profileEditPopup.querySelector(".popup__close");
const profileEditform = document.querySelector("#edit-profile-form");




const subtitleBtn = document.querySelector(".popup__button");

const profileAddPopup= document.querySelector("#add-popup");



const cardAddButton= document.querySelector("#add-button");











//übergebe








//modal
const modal = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__close");


//form
const form = document.querySelector(".popup__form");









/*
 ** Init
 */


/*
 ** Function
 */

 const TitleInput =document.querySelector(" .popup__input_type_name");
const descriptonInput=document.querySelector(".popup__input_type_description");


 function closePopup(modal) {
  modal.classList.remove("popup_opened");
 }
 
 function openPopup(modal) {
 modal.classList.add("popup_opened");
 }
 



 profileEditCloseButtton.addEventListener("click", ()=>{
  closePopup(profileEditPopup);
  });



  function ProfileFormSubmit(evt) {
    evt.preventDefault();
    headerName.textContent = TitleInput.value;
  headerDescription.textContent = descriptonInput.value;
  
  closePopup(profileEditPopup);


  
  };


  function openProfile() {
    
    TitleInput.value = headerName.textContent;
    descriptonInput.value = headerDescription.textContent;
   openPopup(profileEditPopup);
 

  
  
}



  cardAddButton.addEventListener("click",()=>
  {  
    
  
  openPopup(profileAddPopup);
  });



  


 
    
 
  










//eventlistener
editBtn.addEventListener('click', openProfile);
profileEditform.addEventListener("submit", ProfileFormSubmit);





  const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__content");

  const cards = document.querySelector(".cards");
  

  function toggleLike(button) {
    button.classList.toggle("card__button-like_filled");
  }
  
  function createCard(data) {

   
    const cardlEment = cardTemplate.cloneNode(true);

    const cardElementImage = cardlEment.querySelector(".card__image");
    const cardHeader = cardlEment.querySelector(".card__text");
  
    const cardButton = cardlEment.querySelector(".button_type_trash");
    function removeCard() {  
      cardlEment.remove();
    }
    cardButton.addEventListener("click", removeCard);
  
    

  const cardLikeButton = cardlEment.querySelector(".card__button-like");
  
   cardLikeButton.addEventListener("click", () => toggleLike(cardLikeButton));
  
    const cardImageButton = cardlEment.querySelector(".button_type_image");
    function openCardImageModal() {
      fillImageModal(data);
      openImageModal();
    }
  

    const cardTrashButton = cardlEment.querySelector(".button_type_trash");
    function removeCard() {
      cardlEment.remove();
    }

    cardTrashButton.addEventListener("click", removeCard);


    
    cardImageButton.addEventListener("click", openCardImageModal);
  
    const cardTitle = data.name;
    const cardLink = data.linke;
    cardElementImage.setAttribute("src", cardLink);
    cardElementImage.setAttribute("alt", `Photo of ${cardTitle}`);
    cardHeader.textContent = cardTitle;
    return cardlEment;
  }
  


  const cardAddForm = document.querySelector("#add-card-form");
const profileTitleInput =document.querySelector(" .popup__type_name");
const profiledescriptonInput=document.querySelector(".popup__type_description");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: profileTitleInput.value,
    linke: profiledescriptonInput.value
  };

  renderNewCard(createCard(newCard));
  evt.target.reset();
  closePopup();
}

cardAddForm.addEventListener("submit", handleCardFormSubmit);


function renderNewCard(card) {
  cards.prepend(card);
}

const closeButtons = document.querySelectorAll(".popup__close");

closeButtons.forEach((button) => {
  const activeModal = button.closest('.popup');
  button.addEventListener('click', () => closePopup(activeModal));
});

  function renderCard(card) {
    cards.append(card);
  }
  



  initialCards.forEach((element) => renderCard(createCard(element)));


  const imagePopup = document.querySelector(".content__popup");
  const imagepopupBackground = imagePopup.querySelector(".popup__image");
  const imagepopupHeader = imagePopup.querySelector(".popup__header");

  function openimagePopul() {
    openPopup(imagePopup);
  }

  function fillImageModal(data) {
    imagePopup.setAttribute("src", data.linke);
    imagepopupBackground.setAttribute("src",  data.linke);
    imagepopupHeader.textContent = data.name;
    openimagePopul();
    return  imagePopup;
  }



