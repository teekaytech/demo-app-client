import React from 'react';
import { useLocation } from 'react-router-dom';
import Admin from '../Admin';
import User from '../User';

function Dashboard() {
  const location = useLocation();
  const { userType } = location.state.userData;
  return (
    <>
      { userType === 'Admin' ? (<Admin />) : (<User />)}
    </>
  );
}

export default Dashboard;
