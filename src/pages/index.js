import "../pages/index.css";
import { UserInfo } from "../components/UserInfo.js";
import { FormValidator } from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { Section } from "../components/Section.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
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
deleteInput
} from "../utils/Constants.js";

const api= new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12", 
    headers: {
      authorization: "a62acfc5-af94-4242-902c-c2cf40c0593c",

      'Content-Type': "application/JSON"

    }
})

let currentUserId= null;

const userInfo = new UserInfo(selectors);


const createCard = (cardObject) => {
  const card = new Card(
    {
      data: {...cardObject, currentUserId},
      handleCardPopup: (imgData) => {
        imagePopup.open(imgData);
      },
      handleLike: (id) => {
        api.addLike(id)
        .then((res) => card.updateLikes(res))
          .catch((err) => console.log(err));
      },
      handleDeleteClick: (id) => {
        api.removelike(id)
        .then((res) => card.updateLikes(res))
        .catch((err) => console.log(err));
    },
    handleTrashPopup: (id) => {
      fillDeletePopup(id);
    },
  },
    selectors.cardTemplate, profile.id
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

function userData() {

    api.getUserData().then((res) => {
      currentUserId = res._id;
      userInfo.setUserInfo({
        userName: res.name,
        userJob: res.about,
        userAvatar: res.avatar
      });
      //userInfo.setUserImage({ userImage: res.avatar });
    profile.setAttribute("id", res._id);
    });

}

userData();


Promise.all([api.getInitialCards(), api.getUserData()])
.then(([cardsArray, userData]) => {
  userInfo.setUserInfo({
    userName: userData.name,
    userJob: userData.about,
    userAvatar: userData.avatar

  })
  let cardSection = new Section(
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
  const newCard = { name: data.title, link: data.link };
  api.addNewCard(newCard)
  

    .then(res => {
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
  const updateUser = {name: data.name, about: data.description};
  api.submitUserEdit(updateUser)
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
  api.updateProfilePicture(data.profilepic)
  .then((res) => {
    userInfo.setUserImage({ userImage: res.avatar });
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


const deletePopup = new PopupWithForm(selectors.deletePopup, (data) => {
  const card = document.getElementById(data.cardId);

  api
    .deleteCard(data.cardId)
    .then(() => {
      card.remove();
      deletePopup.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      deletePopup.renderLoading(false);
    });
});


function fillDeletePopup(data) {
  deleteInput.value = data;
  deletePopup.open();
}
deletePopup.setEventListeners();