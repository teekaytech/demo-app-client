/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Admin from '../Admin';
import Sidebar from '../Sidebar';
import User from '../User';
import Navbar from './Navbar';

function Dashboard() {
  const location = useLocation();
  const { userType } = location.state.userData;
  return (
    <>
      <div className="p-container">
        <Navbar userType={userType} />
        <main>{userType === 'Admin' ? <Admin /> : <User />}</main>
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
}

export default Dashboard;
