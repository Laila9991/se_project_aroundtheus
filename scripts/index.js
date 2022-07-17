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

const editBtn = document.querySelector(".profile__button-edit");
const profileEditPopup= document.querySelector("#edit-popup");
const profileEditCloseButtton= profileEditPopup.querySelector(".popup__close");
const profileEditform = document.querySelector("#edit-profile-form");

const cardlist = document.querySelector(".cards__list");


const subtitleBtn = document.querySelector(".popup__button");

const profileAddPopup= document.querySelector("#add-popup");
const cardAddButton= document.querySelector("#add-button");
const profileAddCloseBtn= profileAddPopup.querySelector(".popup__close");
const cardAddForm = document.querySelector("#add-card-form");




//übergebe
const profileTitleInput =document.querySelector(" .popup__input_type_name");
const profiledescriptonInput=document.querySelector(".popup__input_type_description");







//modal
const modal = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup__close");
const cardsList = document.querySelector(".cards__list");

//form
const form = document.querySelector(".popup__form");









/*
 ** Init
 */


/*
 ** Function
 */
 function closePopup(modal) {
 modal.classList.remove("popup_opened");
}

function openPopup(modal) {
modal.classList.add("popup_opened");
}







profileEditCloseButtton.addEventListener("click", ()=>{
  closePopup(profileEditPopup);
  });




cardAddButton.addEventListener("click",()=>
{  
  

openPopup(profileAddPopup);
});

profileAddCloseBtn.addEventListener("click", ()=>{
  closePopup(profileAddPopup);
  });




  function ProfileFormSubmit(evt) {
    evt.preventDefault();
    headerName.textContent = profileTitleInput.value;
  headerDescription.textContent = profiledescriptonInput.value;
  
  closePopup(profileEditPopup);


  
  };


  function openProfile() {
    
    profileTitleInput.value = headerName.textContent;
    profiledescriptonInput.value = headerDescription.textContent;
   openPopup(profileEditPopup);
 

  
  
};





editBtn.addEventListener("click", openProfile);
profileEditform.addEventListener("submit", ProfileFormSubmit);










function getCard(data){
  
  //clone template
    const cardelement = cardTemplate.cloneNode(true);
    // find .card__image
    const cardImage = cardelement.querySelector(".card__image");
    //find card text
    const cardTitle = cardelement.querySelector(".card__text");
  // replace image src
    cardImage.src = data.linke;
    //replace name alt 
    cardImage.alt = data.name;
   
    //append to list
    cardTitle.textContent = data.name;
    //card element is the clone 

    return cardelement;
   
   


}


cardAddForm.addEventListener("submit", (event)=>{
  event.preventDefault();

  const name= event.target.title.value;
  const link= event.target.linke.value;
  
  const cardView =getCard({
    name,
    link,


  });
 



  rederCard(cardView, cardlist);
  closePopup(profileAddPopup);

  });
  

initialCards.forEach(function(data){

 const cardView=getCard(data);
console.log(cardView);
      rederCard(cardView, cardlist) ;
    
    });
    

    function rederCard( cardelement, container){
      //append to list 
      container.prepend(cardelement);
    }
    





