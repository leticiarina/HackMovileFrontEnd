import { Map } from "immutable"
import * as actions from "./actions"
import * as effects from "./effects"
import * as selectors from "./selectors"

const scaffold = Map({
  balance: null,
})

const reducer = (state = scaffold, action) => {
  switch(action.type){
    case "SET_BALANCE":
      return state.set("balance", action.type)
    default:
      return state
  }
}

export { actions, effects, selectors }

export default reducer
