import "../pages/index.css";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithFormSubmit } from "../components/PopupWithFormSubmit.js";

import { Api } from "../components/Api.js";

import {
  profile,
  initialCards,
  editBtn,
  cardAddButton,
  profileNameInput,
  profileDescInput,
  config,
  selectors,
  addCardButton,
  editProfilePicButton,
  deleteInput,
} from "../utils/Constants.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "a62acfc5-af94-4242-902c-c2cf40c0593c",

    "Content-Type": "application/JSON",
  },
});

let currentUserId = null;
let cardSection = null;

const userInfo = new UserInfo(selectors);

const deletePopup = new PopupWithFormSubmit(selectors.deletePopup);
deletePopup.setEventListeners();

const createCard = (cardObject) => {
  const card = new Card(
    {
      data: { ...cardObject, currentUserId },
      handleCardClick: (imgData) => {
        imagePopup.open(imgData);
      },
      handleLikeClick: (id, isLiked) => {
        api
          .changeLikeCardStatus(id, isLiked)
          .then((res) => card.updateLikes(res))
          .catch((err) => console.log(err));
      },
      handleDeleteClick: (id) => {
        deletePopup.open();
        deletePopup.setSubmitAction(() => {
        deletePopup.renderLoading(true);
          api
            .deleteCard(id)
            .then(() => {
              card.remove();
              deletePopup.close();
            })
            .catch((err) => console.log(err))
            .finally(() => {
              deletePopup.renderLoading(false);
            });
        });
      },
    },
    selectors.cardTemplate,
    profile.id
  );
  return card.generateCard();
};

function fillProfileForm() {
  const { userName, userJob } = userInfo.getUserInfo();

  profileNameInput.value = userName;
  profileDescInput.value = userJob;
}

const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();


Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([cardsArray, userData]) => {
    currentUserId = userData._id;
    profile.setAttribute("id", userData._id);

    userInfo.setUserInfo({
      userName: userData.name,
      userJob: userData.about,
      userAvatar: userData.avatar,
    });
    cardSection = new Section(
      {
        items: cardsArray,
        renderer: (data) => {
          const cardEl = createCard(data);
          cardSection.addItem(cardEl);
        },
      },
      ".cards"
    );
    cardSection.renderItems();
  })
  .catch((err) => console.log(err));

const addForm = new PopupWithForm("#add-popup", (data) => {
  addForm.renderLoading(true);
  const newCard = { name: data.title, link: data.link };
  api
    .addNewCard(newCard)

    .then((res) => {
      const cardElement = createCard(res);
      cardSection.addNewItem(cardElement);
      addForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      addForm.renderLoading(false);
    });
});

addForm.setEventListeners();

//resetValidation();
addCardButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addForm.open();
});
console.log(addCardButton);

const addFormValidator = new FormValidator(config, selectors.cardForm);
addFormValidator.enableValidation();

// corektur
const profileForm = new PopupWithForm(selectors.profilePopup, (data) => {
  const updateUser = { name: data.name, about: data.description };
  api
    .submitUserEdit(updateUser)
    //updateUserData();
    //profileForm.close();
    .then((res) => {
      userInfo.setUserInfo({ userName: res.name, userJob: res.about });
      profileForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      profileForm.renderLoading(false);
    });
});

profileForm.setEventListeners();

editBtn.addEventListener("click", () => {
  fillProfileForm();
  editFormValidator.resetValidation();
  profileForm.open();
});

const editFormValidator = new FormValidator(config, selectors.profileForm);
editFormValidator.enableValidation();

const profilePicForm = new PopupWithForm(selectors.profilePicPopup, (data) => {
  api
    .updateProfilePicture(data.profilepic)
    .then((res) => {
      userInfo.setUserInfo({
        userAvatar: res.avatar,
        userName: userInfo.getUserInfo().userName,
        userJob: userInfo.getUserInfo().userJob,
      });
      profilePicForm.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      profilePicForm.renderLoading(false);
    });
});

const profilePicFormValidator = new FormValidator(
  config,
  selectors.profilePicForm
);
profilePicFormValidator.enableValidation();

editProfilePicButton.addEventListener("click", () => {
  profilePicFormValidator.resetValidation();
  profilePicForm.open();
});
profilePicForm.setEventListeners();
