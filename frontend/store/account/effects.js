import { selectors } from "./"
import Router from "next/router"

export const createCharge = () => async(dispatch, getState) => {
  const state = getState()
  const chargeValue = selectors.getChargeValue(state)
  
  try {
    console.log("oi :)")
    Router.push("/confirm-charge")
  } catch (error) {
    console.log(error)
  }
}