const profile = document.querySelector(".profile");
const deletePopup = document.querySelector("#delete-popup");
const deleteInput = deletePopup.querySelector(".popup__input-hidden");

 const profilePicButton = document.querySelector(".profile__button-avatar");
export const headerName = document.querySelector(".profile__name");
export const headerDescription = document.querySelector(".profile__description");

export const editProfilePicButton = document.querySelector(".profile__button-avatar");
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
  profilePicPopup: "#profile-pic",  
  profilePicForm:"#profile-pic-form",
  deletePopup: "#delete-popup",
  cardTemplate: "#card-template",
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__description",
  userAvatarSelector:".profile__avatar"

};


const promiseInformation = {
  baseUrl: "https://around.nomoreparties.co/v1/group-42/cards",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",  
}
}

export {
  profilePicButton,
  promiseInformation,
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
  deleteInput
};