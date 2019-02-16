import axios from "axios"
import { actions } from "./"

export const getAccountBalance = (id) => async(dispatch) => {
  try {
    const response = {
      status: {
        code: 200,
        message: "OK"
      },
      data: {
        balance: 100.00,
      },
    }
    // const response = await axios({
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   method: "get",
    //   params: { id },
    //   responseType: "json",
    //   url: "",
    // });

    await dispatch(actions.setBalance(response.data.balance))

  } catch (error) {
    console.log(error)
  }

}