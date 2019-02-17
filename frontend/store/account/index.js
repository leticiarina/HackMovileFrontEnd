import { Map } from "immutable"
import * as selectors from "./selectors"

const scaffold = Map({
  statement: [
    {
      date: "16/02/19",
      destiny: "Padaria São Jose",
      operation: 1,
      value: 20.00,
    },
    {
      date: "15/02/19",
      destiny: "José Silva",
      operation: 2,
      value: 60.00,
    },
    {
      date: "12/02/19",
      destiny: "Padaria São José",
      operation: 1,
      value: 30.00,
    },
    {
      date: "10/02/19",
      operation: 0
    },
  ],
})

const reducer = (state = scaffold, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export { selectors }
export default reducer
