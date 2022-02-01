import React from 'react'
import PropTypes from 'prop-types'

import { MainHeader, MainNavbar } from '../navbar'

const MainLayout = ({ children }) => (
  <div>
    <MainNavbar />
    <MainHeader />
    {children}
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
}

export default MainLayout
