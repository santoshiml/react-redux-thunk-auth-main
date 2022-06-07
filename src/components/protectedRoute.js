import React from 'react';
import {  Navigate } from 'react-router-dom';



const ProtectedRoute = ({ children })  => {
  const auth  = JSON.parse(localStorage.getItem('user-info'))
  console.log('aaauth', auth)

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;