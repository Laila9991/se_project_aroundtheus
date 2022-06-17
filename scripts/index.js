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

const subtitleBtn = document.querySelector(".modal__submit-btn");
const editBtn = document.querySelector(".profile__button-edit");

//modal
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close");

//form
const form = document.querySelector(".form");
const inputName = document.querySelector("#list-name");
const inputDescription = document.querySelector("#list-description");

/*
 ** Init
 */

/*
 ** Function
 */
function ButtonClose() {
  modal.classList.remove("modal_is-open");
}
function ButtonOpen() {
  inputName.value = inputName.textContent;
  inputDescription.value = inputDescription.textContent;

  modal.classList.add("modal_is-open");
}

function submitform(event) {
  event.preventDefault();
  headerName.textContent = inputName.value;
  headerDescription.textContent = inputDescription.value;

  ButtonClose();
}

//future function
function getCardElement(data) {
  const cardelement = cardTemplate.cloneNode(true);
  const cardImage = cardelement.querySelector(".card__image");
  const CardTitle = cardelement.querySelector(".card__name");

  cardImage.src = data.link;
  cardImage.alt = data.name;

  CardTitle.textContent = data.name;

  return cardelement;
}

for (let i = 0; i < initialCards.length; i++) {
  let card = getCardElement(initialCards[i]);
}
/*
 ** Event Listeners
 */
form.addEventListener("submit", submitform, false);
editBtn.addEventListener("click", ButtonOpen, false);
closeBtn.addEventListener("click", ButtonClose, false);
