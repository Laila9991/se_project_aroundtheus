const profile = document.querySelector(".profile");



export const headerName = document.querySelector(".profile__name");
export const headerDescription = document.querySelector(".profile__description");

export const editBtn = document.querySelector(".profile__button-edit");
export const profileEditPopup = document.querySelector("#edit-popup");
export const profileEditCloseButtton = profileEditPopup.querySelector(".popup__close");
export const profileEditform = document.querySelector("#edit-popup");


const subtitleBtn = document.querySelector(".popup__button");

 const cardAddPopup = document.querySelector("#add-popup");

export const cardAddButton = document.querySelector("#add-button");

//form
const profileForm = document.querySelector("#edit-profile-form");
const profileNameInput = profileForm.querySelector(".popup__input_type_name")
const profileDescInput = profileForm.querySelector(".popup__input_type_description")

export const titleInput = document.querySelector(".popup__input_type_name");

export const descriptonInput = document.querySelector(
  ".popup__input_type_description"
);
export const closeButtons = document.querySelectorAll(".popup__close");

const popup = document.querySelector("#content__popup");
const popupImage = popup.querySelector(".popup__image");
const popupHeader = popup.querySelector(".popup__header");

const cardAddForm = document.querySelector("#add-card-form");
const cardNameInput = document.querySelector(" .popup__name");
const cardDescriptionInput = document.querySelector(".popup__input_desc");
const cardFormInputs = cardAddForm.querySelectorAll(".form");
const cardFormSubmitButton = cardAddForm.querySelector(".popup__button");
const addCardButton = document.querySelector(".profile__add-button");



//card List
const cardList = document.querySelector(".cards");

export const initialCards = [
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


export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const escapeKeyCode = 27;

export const selectors = {
 
  imagePopup: "#content__popup",
  cardForm: "#add-card-form",
  profilePopup: "#edit-popup",
  profileForm: "#edit-profile-form",
  cardTemplate: "#card-template",
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__description",
};


export {
  profileNameInput,
  profileDescInput,
  profile,
  addCardButton,
  cardAddForm,
  cardAddPopup,
  cardDescriptionInput,
  cardFormSubmitButton,
  cardList,
  cardFormInputs,
  cardNameInput,
  popup,
  popupHeader,
  popupImage,
  profileForm,
  subtitleBtn,
};