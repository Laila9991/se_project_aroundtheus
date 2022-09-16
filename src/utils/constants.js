const escapeKeyCode = 27;

  
  export const headerName = document.querySelector(".profile__name");
  export const headerDescription = document.querySelector(".profile__description");
  
  export const editBtn = document.querySelector(".profile__button-edit");
 export  const profileEditPopup = document.querySelector("#edit-popup");
  export const profileEditCloseButtton = profileEditPopup.querySelector(".popup__close");
  export const profileEditform = document.querySelector("#edit-profile-form");
  
  export const subtitleBtn = document.querySelector(".popup__button");
  
  export const cardAddPopup = document.querySelector("#add-popup");
  
  export const cardAddButton = document.querySelector("#add-button");
  
  //form
  export const profileForm = document.querySelector(".popup__form");
  
  export const titleInput = document.querySelector(".popup__input_type_name");
  
  export const descriptonInput = document.querySelector(
    ".popup__input_type_description"
  );
  export const closeButtons = document.querySelectorAll(".popup__close");

const popup = document.querySelector("#content__popup")
const popupImage = popup.querySelector(".popup__image");
const popupHeader = popup.querySelector(".popup__header");



  export const cardAddForm = document.querySelector("#add-card-form");
  export const cardNameInput = document.querySelector(" .popup__name");
  export const cardDescriptionInput = document.querySelector(".popup__input_desc");
  export const cardFormInputs = cardAddForm.querySelectorAll(".form");
  export const cardFormSubmitButton = cardAddForm.querySelector(".popup__button");

  //card List 
  export const cardList = document.querySelector(".cards");


export const initialCards=[

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


