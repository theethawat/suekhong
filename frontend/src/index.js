import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssVarsProvider } from '@mui/joy/styles'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'
import configureStore from './redux/configureStore'
import themeConfig from './themeConfig'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssVarsProvider theme={themeConfig}>
        <App />
      </CssVarsProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
