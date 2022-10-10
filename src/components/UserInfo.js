export class UserInfo {
  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._jobElement = document.querySelector(userJobSelector);
    this._userAvatarElement= document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userJob: this._jobElement.textContent,
      userAvatar: this._userAvatarElement.src
    };
  }

  setUserInfo({ userName, userJob, userAvatar }) {
    this._nameElement.textContent = userName;
    this._jobElement.textContent = userJob;
    if(userAvatar){
    this.userAvatarElement.src = userAvatar;
  }
}
}
