import { headerName, headerDescription } from "../utils/constants";
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
    this._nameElement.value = userName;
    this._jobElement.value = userJob;
  }
   }
