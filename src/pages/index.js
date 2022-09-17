import "../pages/index.css";


import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import  UserInfo  from "../components/userInfor.js";

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



const popupImage = new PopupWithImage('#content__popup');
popupImage.setEventListeners();

const CardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const handleCardClick = () => {popupImage.open(item)};
    const cardEl = new Card(item, "#card-template", handlePreviewPicture() );


    CardSection.addItem(cardEl.generateCard());
  }
}, ".cards");

CardSection.renderItems();



const addNewCard = new PopupWithForm("#add-popup", () => {
  const newCard = { name: cardNameInput.value, link: cardDescriptionInput.value };
  const handlePreviewPicture = () => {popupImage.open(newCard);}
  const newCardEl = new Card(newCard, "#card-template", handlePreviewPicture());
  CardSection.addNewItem(newCardEl.generateCard());
  addNewCard.close();
});
addNewCard.setEventListeners();

cardAddButton.addEventListener("click", () => addNewCard.open());


const addValidator = new FormValidator(config, "#add-card-form");
addValidator.enableValidation();



const profileForm = new PopupWithForm("#edit-popup", () => {
  titleInput.value = headerName.textContent;
  descriptonInput.value = headerDescription.textContent;
  profileForm.close();
 profileForm.setEventListeners();
})
editBtn.addEventListener("click", () => profileForm.open());



const editValidator = new FormValidator(config, "#edit-profile-form");
editValidator.enableValidation();






