import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/output.css'
import { MantineProvider } from '@mantine/core'

// eslint-disable-next-line object-curly-newline
import { Dashboard, Management, Menu, Auth } from './layouts'

const App = () => {
  const privateRoute = (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/management/*" element={<Management />} />
    </Routes>
  )

  const publicRoute = (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Auth />} />
    </Routes>
  )

  return (
    <div className="App">
      <MantineProvider>
        <BrowserRouter>
          {window.localStorage.getItem('TDC_TOKEN')
            ? privateRoute
            : publicRoute}
        </BrowserRouter>
      </MantineProvider>
    </div>
  )
}

export default App
