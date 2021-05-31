import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './containers/Navbar';
// import Admin from './Admin';
// import User from './User';
import Sidebar from './Sidebar';

const Revenue = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="p-container">
        <Navbar />
        <p>Revenue</p>
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
export default Revenue;
