import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, useNavigate, Navigate } from 'react-router-dom';

function PrivateRoute() {
  const isAuthenticated = useSelector(state => state.user.isAdmin);
  const navigate = useNavigate();
  
  return (
<>
{
  isAuthenticated ? <div>privatee</div>:  <Navigate to="/login" replace />
}
</>
  );
}

export default PrivateRoute;