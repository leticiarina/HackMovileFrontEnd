import React from "react"
import HomeComponent from "./components/home"
import { effects } from "./store"

export default class Home extends React.Component{
  static async getInitialProps({ store, query }) {
    await store.dispatch(effects.getAccountBalance(query.id))
  }

  render() {
    return(
      <HomeComponent/>
    )
  }

}
