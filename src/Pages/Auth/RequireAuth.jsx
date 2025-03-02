import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'universal-cookie';

const RequireAuth = () => {
  const cookies = new Cookies();
  const token = cookies.get('auth_token');

  // If token exists, render the child routes; otherwise, redirect to login with replace
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;