import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'

const RequireBack = () => {
  const cookies = new Cookies()
  const token = cookies.get('auth_token')
  return token ? <Navigate to={'/'} replace={true} /> : <Outlet />
}

export default RequireBack