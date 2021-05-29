import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      Hello Dashboard
      {location.state.userData.username}
      {location.state.userData.userType}
    </div>
  );
}

export default Dashboard;
