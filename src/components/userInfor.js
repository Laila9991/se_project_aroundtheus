import { titleInput, descriptonInput } from "../utils/constants.js";


export class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._jobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userJob: this._jobElement.textContent };
  }

  setUserInfo({userName, userJob}) {
    titleInput.value = userName;
    descriptonInput.value = userJob;
  }
}