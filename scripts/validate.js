const showInputError = (formEl, inputEl, option) => {
const { inputErrorClass, errorClass } = option;
const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);

inputEl.classList.add(inputErrorClass);
errorMessageEl.textContent= inputEl.validationMessage;
errorMessageEl.classList.add(errorClass);

}
const hideInputError = (formEl, inputEl, options) => {
    const { inputErrorClass, errorClass } = options;
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);


 };


const checkInputValidity = (formEl, inputEl, option) => {
    if (!inputEl.validity.valid) {
      showInputError(formEl, inputEl, option);
    } else {
      hideInputError(formEl, inputEl, option);
    }
  };



function setEventlisteners(formEl, option){
const {inputSelector}=option;
const inputEls =[...formEl.querySelectorAll(inputSelector)];
const submitButton = formEl.querySelector('.popup__button');

inputEls.forEach((inputEl) => {
inputEl.addEventListener("input",(e) =>  {
checkInputValidity(formEl, inputEl, option);

});
});
};
   


function enableValidation(option){
const { formSelector } = option;
 const formEls =[...document.querySelectorAll(formSelector)];
formEls.forEach((formEl)=>{
 formEl.addEventListener("submit", (e) =>{
    e.preventDefault();

 });
setEventlisteners(formEl, option);



});
};


function enableValidation(option){
    const { formSelector } = option;
     const formEls =[...document.querySelectorAll(formSelector)];
    formEls.forEach((formEl)=>{
     formEl.addEventListener("submit", (e) =>{
        e.preventDefault();
    
     });



const config={
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  

}


enableValidation(config);

//css reingehen anpassen;