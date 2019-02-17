import { combineReducers } from "redux"
import account from "../store/account"
import login from "../store/login"

export default combineReducers({
  account,
  login,
})
