import axios from "axios"
import Router from "next/router"
import { selectors } from "./"

export const checkPhone = () => async (dispatch, getState) => {
  const state = getState()
  const phone = selectors.getPhone(state)

  try {
    // await axios({
    //   data: { phone },
    //   method: "post",
    //   responseType: "json",
    //   url: API.oauth,
    // })

    Router.push("/confirm-login")

  } catch(error) {
    console.log(error)
  }

}

export const checkToken = () => async(dispatch, getState) => {
  const state = getState()
  const token = selectors.getToken(state)

  try {
    //const response = await axios({
    //   data: { token },
    //   method: "post",
    //   responseType: "json",
    //   url: API.oauth,
    // })

    const response = {
      data: {
        status: {
          code: 200,
        }
      }
    }

    if(response.data.status.code == 200) {
      Router.push("/home")
    } 

  } catch(error) {
    console.log(error)
  }

}
