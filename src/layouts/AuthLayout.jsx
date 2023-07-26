import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      Authentication Layout
      <Outlet />
    </div>
  )
}

export default AuthLayout
