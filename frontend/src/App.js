/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { Auth } from './views'
import './index.css'

function App() {
  return (
    <div>
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
              <Route index element={<div>Home</div>} />
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
    </div>
  )
}

export default App
