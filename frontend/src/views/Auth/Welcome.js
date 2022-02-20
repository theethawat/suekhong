import React from 'react'
import { useNavigate } from 'react-router'
import { AuthLayout } from '../../components/layouts'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <AuthLayout title="Welcome">
      <div>
        <h1 className="text-3xl"> Welcome to TDC-Garden</h1>
      </div>
    </AuthLayout>
  )
}

export default Welcome
