
import FormValidator  from "./FormValidator.js";
import Card  from "./card.js";
import { closePopup,openPopup} from "./utils.js";




// cards array

const initialCards = [
  {
    name: "Yosemite Valley ",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg ",
  },

  {
    name: "Lake Louise ",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg  ",
  },
  {
    name: "Bald Mountains ",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg ",
  },
  {
    name: "Latemar ",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg ",
  },

  {
    name: "Vanoise National Park ",
    link: " https://code.s3.yandex.net/web-code/vanoise.jpg ",
  },

  {
    name: "Lago di Braies ",
    link: "https://code.s3.yandex.net/web-code/lago.jpg  ",
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
const profileEditPopup = document.querySelector("#edit-popup");
const profileEditCloseButtton = profileEditPopup.querySelector(".popup__close");
const profileEditform = document.querySelector("#edit-profile-form");

const subtitleBtn = document.querySelector(".popup__button");

const cardAddPopup = document.querySelector("#add-popup");

const cardAddButton = document.querySelector("#add-button");

//form
const profileForm = document.querySelector(".popup__form");

const titleInput = document.querySelector(".popup__input_type_name");

const descriptonInput = document.querySelector(
  ".popup__input_type_description"
);




profileEditCloseButtton.addEventListener("click", () => {
  closePopup(profileEditPopup);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  headerName.textContent = titleInput.value;
  headerDescription.textContent = descriptonInput.value;

  closePopup(profileEditPopup);
}

function openProfile() {
  titleInput.value = headerName.textContent;
  descriptonInput.value = headerDescription.textContent;
  openPopup(profileEditPopup);
}

cardAddButton.addEventListener("click", () => {
  openPopup(cardAddPopup);
});

//eventlistener
editBtn.addEventListener("click", openProfile);
profileEditform.addEventListener("submit", handleProfileFormSubmit);

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__content");

const cards = document.querySelector(".cards");

function toggleLike(button) {
  button.classList.toggle("card__button-like_filled");
}

function newCard(data) {
  const card = new Card(data, cardSelector, );
  const cardElement = card.generateCard();
  return cardElement;
}

function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardElementImage = cardElement.querySelector(".card__image");
  const cardHeader = cardElement.querySelector(".card__text");

  const cardLikeButton = cardElement.querySelector(".card__button-like");

  cardLikeButton.addEventListener("click", () => toggleLike(cardLikeButton));

  const cardImageButton = cardElement.querySelector(".button_type_image");
  function openCardImageModal() {
    openImagePreview(data);
  }

  const cardTrashButton = cardElement.querySelector(".button_type_trash");
  function removeCard() {
    cardElement.remove();
  }

  cardTrashButton.addEventListener("click", removeCard);

  cardImageButton.addEventListener("click", openCardImageModal);

  const cardTitle = data.name;
  const cardLink = data.link;
  cardElementImage.setAttribute("src", cardLink);
  cardElementImage.setAttribute("alt", `Photo of ${cardTitle}`);
  cardHeader.textContent = cardTitle;
  return cardElement;
}

const cardAddForm = document.querySelector("#add-card-form");
const cardNameInput = document.querySelector(" .popup__name");
const cardDescriptionInput = document.querySelector(".popup__input_desc");
const cardFormInputs = cardAddForm.querySelectorAll(".form")
const cardFormSubmitButton = cardAddForm.querySelector(".popup__button");


function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardDescriptionInput.value,
  };

  renderNewCard(createCard(newCard));
  cardAddForm.reset();
  closePopup(cardAddPopup);
  addFormValidator.toggleButtonState();
  
}

cardAddForm.addEventListener("submit", handleCardFormSubmit);

function renderNewCard(card) {
  cards.prepend(card);
}

const closeButtons = document.querySelectorAll(".popup__close");

closeButtons.forEach((button) => {
  const activeModal = button.closest(".popup");
  button.addEventListener("click", () => closePopup(activeModal));
});

function renderCard(card) {
  cards.append(card);
}

initialCards.forEach((element) => renderCard(createCard(element)));

const imagePopup = document.querySelector("#content__popup");
const imagePopupBackground = imagePopup.querySelector(".popup__image");
const imagePopupTitle = imagePopup.querySelector(".popup__header");

function openImagePopup() {
  openPopup(imagePopup);
}

function openImagePreview(data) {
  imagePopupBackground.setAttribute("src", data.link);
  imagePopupBackground.setAttribute("alt", `Photo of ${data.link}`);
  imagePopupBackground.textContent = data.name;
  openImagePopup();
}

function closePopupByEscape(event) {
  if (event.key === "Escape") {
    // search for an opened popup
    const openedPopup = document.querySelector(".popup_opened"); 

    // close it
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened"); 
  document.removeEventListener("keydown", closePopupByEscape); 
  popup.removeEventListener("mousedown", closePopupOnRemoteClick); 
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("mousedown", 
  closePopupOnRemoteClick);
  document.addEventListener("keydown", closePopupByEscape); 

}







// create a outside click listener
function closePopupOnRemoteClick(evt) {
  // target is the element on which the event happened
  // currentTarget is the popup
  // if they are the same then we should close the popup
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

//Validation
const config= {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};




const addFormValidator = new FormValidator(config, "#add-card-form");
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, "#edit-profile-form");
editFormValidator.enableValidation();




