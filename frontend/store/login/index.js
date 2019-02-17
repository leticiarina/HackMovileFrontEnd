import { Map } from "immutable"
import * as actions from "./actions"
import * as effects from "./effects"
import * as selectors from "./selectors"

const scaffold = Map({
  phone: "",
  token: "",
})

const reducer = (state = scaffold, action) => {
  switch(action.type){
    case "ON_CHANGE_PHONE":
      return state.set("phone", action.phone)
    case "ON_CHANGE_TOKEN":
      return state.set("token", action.token)
    default:
      return state
  }
}

export { actions, effects, selectors }

export default reducer
