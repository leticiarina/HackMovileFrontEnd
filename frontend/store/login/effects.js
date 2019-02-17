import axios from "axios"
import Router from "next/router"
import { selectors } from "./"

export const checkPhone = () => async (dispatch, getState) => {
  const state = getState()
  const phoneNumber = selectors.getPhone(state)

  try {
    await axios({
      data: { phoneNumber },
      method: "post",
      responseType: "json",
      url: "http://hackpay-env.wsc8gyb2s4.us-east-1.elasticbeanstalk.com/users/login",
    })

    Router.push("/confirm-login")

  } catch(error) {
    console.log(error)
  }

}

export const checkToken = () => async(dispatch, getState) => {
  const state = getState()
  const phoneNumber = selectors.getPhone(state)
  const token = selectors.getToken(state)

  try {
    const response = await axios({
      data: { phoneNumber, token },
      method: "post",
      responseType: "json",
      url: "http://hackpay-env.wsc8gyb2s4.us-east-1.elasticbeanstalk.com/users/generateToken",
    })

    // const response = {
    //   data: {
    //     status: {
    //       code: 200,
    //     }
    //   }
    // }

    if(response.data.status.code == 200) {
      Router.push("/home")
    } 

  } catch(error) {
    console.log(error)
  }

}
