  export class Section {
    constructor({ items, renderer }, containerSelector){ 

 
   this._renderer = renderer;
    
 this._container = document.querySelector(containerSelector);

  this._items = items;
    }

    
    renderItems() {
        this._items.forEach(this._renderer);
      }

    
      addItem(element) {
        this._container.append(element);
      }
    
      addNewItem(element) {
        this._container.prepend(element);
      }
  
}





