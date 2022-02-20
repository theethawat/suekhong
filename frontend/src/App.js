/* eslint-disable react/jsx-wrap-multilines */
import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Auth } from './views'
import './index.css'

function App() {
  return (
    <div>
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
              <Route path="login" element={<div>Login</div>} />
              <Route index element={<Auth.Welcome />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
