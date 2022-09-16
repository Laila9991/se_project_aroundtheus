import { headerName, headerDescription } from "../utils/constants.js";

export default class UserInfo {
  constructor({ personsName, personsJob }) {
    this._personsName = personsName;
    this._personsJob = personsJob;
  }

  getUserInfo() {
    return { personsName: headerName.textContent, personsJob: headerDescription.textContent };
  }

  setUserInfo() {
    headerName.textContent = this._personsName;
    headerDescription.textContent = this._personsJob;
  }
}

