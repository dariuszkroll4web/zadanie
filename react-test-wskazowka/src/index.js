import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

import Page from './Page'
import { configureStore } from './state'

const store = configureStore()

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  font: 14px Arial, Tahoma, sans-serif;
`

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
