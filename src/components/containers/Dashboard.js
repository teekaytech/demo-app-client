/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Admin from '../Admin';
import Sidebar from '../Sidebar';
import User from '../User';
import Navbar from './Navbar';

const Dashboard = () => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('userData'));
    setUserType(obj.type);
  }, []);

  return (
    <>
      <div className="p-container">
        <Navbar />
        <main>{userType && userType === 'Admin' ? <Admin /> : <User />}</main>
        <div id="sidebar">
          <div className="sidebar__title">
            <div className="sidebar__img">
              <span>{'<>'}</span>
              <h1>Demo App</h1>
            </div>
            <i className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
