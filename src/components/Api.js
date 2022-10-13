export class Api {
    constructor({baseUrl, headers}) {
        this.url = baseUrl;
        this.headers = headers;
    }

    _handleServerResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error ${res.status}`);
    }
    
    getUserData() {
         return fetch(`${this.url}/users/me`, {
            headers: this.headers
        })
        .then(this._handleServerResponse)  
       
    }
    getInitialCards() {
        return fetch(`${this.url}/cards`, {
          headers: this.headers
        })
        .then(this._handleServerResponse)  

    }

    submitUserEdit(data) {
      return fetch(`${this.url}/users/me`, {
          method: "PATCH",
          headers: this.headers,
          body: JSON.stringify({
              name: data.name,
              about: data.about
          })
      })
      .then(this._handleServerResponse)  

  }


  addNewCard(data) {
    return fetch(`${this.url}/cards`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    })

    .then(this._handleServerResponse)  

}

addLike(id) {
  return fetch(`${this.url}/cards/likes/${id}`, {
      method: "PUT",
      headers: this.headers
  })

  .then(this._handleServerResponse)  

}

removelike(id) {
  return fetch(`${this.url}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this.headers
  })
  .then(this._handleServerResponse)
}

deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
        method: "DELETE",
        headers: this.headers
    })
    .then(this._handleServerResponse)
}


updateProfilePicture(url) {
    return fetch(`${this.url}/users/me/avatar`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({
            avatar: url
        })
    })
    .then(this._handleServerResponse)
}
}







       

