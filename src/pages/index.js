import "../pages/index.css";
import {UserInfo} from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {Section} from "../components/section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import {
  initialCards,
  editBtn,

  cardAddButton,
  headerName,
  
 headerDescription,
  config,
  selectors,
} from "../utils/constants.js";




const createCard = (cardObject) => {
  const card = new Card(
    {
      data: cardObject,
      handleCardPopup: (imgData) => {
        imagePopup.open(imgData);
      },
    },
    selectors.cardTemplate
  );
  return card.generateCard();
};




function fillProfileForm() {
  const { userName,  userJob } = 
  UserInfo.getUserInfo();
  headerName.value = userName; 
  headerDescription.value = userJob; 
}



const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();


const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardEl = createCard(data);
      cardSection.addItem(cardEl);
    },
  },
  ".cards"
);

cardSection.renderItems();


const addForm = new PopupWithForm("#add-popup", (data) => {
  const newCard = { name: data.title, link: data[""] };
  const newCardEl = createCard(newCard);
  cardSection.addNewItem(newCardEl);
  addForm.close();
});

addForm.setEventListeners();

//toggleButtonState
cardAddButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  addForm.open();
   });


const addFormValidator = new FormValidator(config, selectors.cardForm);
addFormValidator.enableValidation();

const userInfo = new UserInfo(selectors);


// corektur 
const profileForm = new PopupWithForm(selectors.profilePopup, (data) => {
  userInfo.setUserInfo({
    userName: data.name,
    userJob: data.description
  });
  profileForm.close();
});

profileForm.setEventListeners();

editBtn.addEventListener("click", () => {
  fillProfileForm();
  profileForm.open();
});


const editFormValidator = new FormValidator(config, selectors.profileForm);
editFormValidator.enableValidation();
