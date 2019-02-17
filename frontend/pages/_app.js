import React from "react"
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import App, { Container } from "next/app"
import Head from "next/head"
import withRedux from "next-redux-wrapper"
import thunkMiddleware from "redux-thunk"
import { fromJS } from "immutable"
import reducer from "./reducers"
import { GridThemeProvider } from "styled-bootstrap-grid"
import { createGlobalStyle } from "styled-components"

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/
const makeStore = (initialState) => createStore(reducer, fromJS(initialState), applyMiddleware(thunkMiddleware))

const gridTheme = {
  row: {
    padding: 0,
  },
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'proxima-nova-soft';
    src: url('static/fonts/proxima-nova-soft/pns-regular-webfont.eot');
    src: //url('static/fonts/proxima-nova-soft/pns-regular-webfont.eot?#iefix') format('embedded-opentype'),
        url('static/fonts/proxima-nova-soft/pns-regular-webfont.otf') format('opentype'),
        url('static/fonts/proxima-nova-soft/pns-regular-webfont.woff') format('woff'),
        url('static/fonts/proxima-nova-soft/pns-regular-webfont.woff2') format('woff2'),
        url('static/fonts/proxima-nova-soft/pns-regular-webfont.ttf') format('truetype'),
        url('static/fonts/proxima-nova-soft/pns-regular-webfont.svg#proxima_nova_softregular') format('svg');
    font-style: normal;
  }
  body {
    font-family:  proxima-nova-soft,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    margin: 0px;
    color: #78838b;
  }
  h1 {
    font-size: 2em;
    font-weight: 500;
  }

  .icons {
    color: #32a3d5;
    font-size: 11px;
  }
`

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
          <title>MovileHack</title>
        </Head>
        <GlobalStyle/>
        <Provider store={store}>
          <GridThemeProvider gridTheme={gridTheme}>
            <Component {...pageProps} />
          </GridThemeProvider>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
