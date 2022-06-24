/*
 ** array of Date
 */

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
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__content");

//header

const headerName = document.querySelector(".profile__name");
const headerDescription = document.querySelector(".profile__description");

const subtitleBtn = document.querySelector(".popup__button");
const editBtn = document.querySelector(".profile__button-edit");

//modal
const modal = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__close");
const cardsList = document.querySelector(".cards__list");

//form
const form = document.querySelector(".popup__form");
const inputName = document.querySelector("#list-name");
const inputDescription = document.querySelector("#list-description");

/*
 ** Init
 */

/*
 ** Function
 */
function closePopup() {
  modal.classList.remove("popup_opened");
}
function openPopup() {
  modal.classList.add("popup_opened");

  inputName.value = headerName.textContent;
  inputDescription.value = headerDescription.textContent;
}

function submitform(event) {
  event.preventDefault();
  headerName.textContent = inputName.value;
  headerDescription.textContent = inputDescription.value;

  closePopup();
}

//future function
function getCardElement(data) {
  const cardelement = cardTemplate.cloneNode(true);
  const cardImage = cardelement.querySelector(".card__image");
  const cardTitle = cardelement.querySelector(".card__text");

  cardImage.src = data.linke;
  cardImage.alt = data.name;

  cardTitle.textContent = data.name;
  return cardelement;
}

for (let i = 0; i < initialCards.length; i++) {
  let cards = getCardElement(initialCards[i]);
  cardsList.appendChild(cards);
}

/*
 ** Event Listeners
 */
form.addEventListener("submit", submitform);
editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);