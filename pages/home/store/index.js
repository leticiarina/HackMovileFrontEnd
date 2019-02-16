import { Map } from "immutable"
import * as selectors from "./selectors"

const scaffold = Map({
  title: "oi",
})

const reducer = (state = scaffold) => {
  return state
}

export { selectors }

export default reducer
