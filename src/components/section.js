  export class Section {
    constructor ({renderer }, containerSelector){
   
        this._renderer = renderer;
    
        this._section = document.querySelector(containerSelector);
    }


    renderItems() {
        this._items.forEach(this._renderer);
      }

    
      addItem(element) {
        this._container.append(element);
      }
    
  
}


export default Section;


