import React from 'react'
import { Pane, Button } from 'evergreen-ui'

const MainNavbar = () => (
  <div>
    {/* Navbar content */}
    <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
      <Pane flex={1} alignItems="center" display="flex">
        <h1 className="text-lg font-semibold">Header</h1>
      </Pane>
      <Pane>
        {/* Below you can see the marginRight property on a Button. */}
        <Button marginRight={16}>Button</Button>
        <Button appearance="primary">Primary Button</Button>
      </Pane>
    </Pane>
  </div>
)

export default MainNavbar
