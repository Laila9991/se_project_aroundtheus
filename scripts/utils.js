export  function closePopup(popup) {
    popup.classList.remove("popup_opened"); 
    document.removeEventListener("keydown", closePopupByEscape); 
    popup.removeEventListener("mousedown", closePopupOnRemoteClick); 
  }
  
  export  function openPopup(popup) {
    popup.classList.add("popup_opened");
    popup.addEventListener("mousedown", 
    closePopupOnRemoteClick);
    document.addEventListener("keydown", closePopupByEscape); 
  
  }
  

  
 function closePopupByEscape(event) {
    if (event.key === "Escape") {
      // search for an opened popup
      const openedPopup = document.querySelector(".popup_opened"); 
  
      // close it
      closePopup(openedPopup);
    }
  }
  
  
  
  // create a outside click listener
 function closePopupOnRemoteClick(evt) {
    // target is the element on which the event happened
    // currentTarget is the popup
    // if they are the same then we should close the popup
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    }
  }


