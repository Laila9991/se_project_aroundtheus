import popup from "./popup.js"; 

export class PopupWithForm extends popup {
  constructor(popupSelector,  handleFormSubmit ) { 
    super(popupSelector); 
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputEls = Array.from(this._form.querySelectorAll(".popup__input"));
    this._saveButton = this._form.querySelector(".popup__button");
    this._saveButtonText = this._saveButton.value;



    
  }

  _getInputValues() {
    const formValues = {};
    this._inputEls.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  close() {
    this._form.reset;
    super.close();
  }

  renderLoading(isLoading, loadingText='Saving...') {
    if (isLoading) {
      this._saveButton.textContent = loadingText;
    } else {
      this._saveButton.textContent = this._saveButtonText;
    }
  }

  setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", (event) => {
        event.preventDefault();

        this.renderLoading(true);


        const inputValues = this._getInputValues();
        this._handleFormSubmit(inputValues);

        
      });
    }
  }


