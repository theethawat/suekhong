import React from 'react'
import PropTypes from 'prop-types'
import { AppShell } from '@mantine/core'

import { MainHeader, MainNavbar } from '../navbar'

const MainLayout = ({ children }) => (
  <div>
    <AppShell padding="md" navbar={<MainNavbar />} header={<MainHeader />}>
      {children}
    </AppShell>
  </div>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number,
  ]).isRequired,
}

export default MainLayout
