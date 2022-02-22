/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'

import { Auth, Home } from './views'
import './index.css'
import configureStore from './redux/configureStore'

function App() {
  const store = configureStore()
  return (
    <div>
      <Provider store={store}>
        <MantineProvider>
          <BrowserRouter>
            {window.localStorage.getItem('TDC_TOKEN') ? (
              <Routes>
                <Route path="management">
                  <Route path="user" element={<div>Management User</div>} />
                  <Route path="user" element={<div>Management User</div>} />
                </Route>
                <Route path="dashboard">
                  <Route index element={<div>dashboard index</div>} />
                </Route>
                <Route index element={<Home />} />
              </Routes>
            ) : (
              <Routes>
                <Route>
                  <Route path="login" element={<Auth.Login />} />
                  <Route index element={<Auth.Login />} />
                </Route>
              </Routes>
            )}
          </BrowserRouter>
        </MantineProvider>
      </Provider>
    </div>
  )
}

export default App
