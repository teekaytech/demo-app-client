/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const handleClick = () => {
    localStorage.removeItem('data');
  };
  return (
    <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
        <i className="fa fa-home" />
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <h2>OTHER FEATURES</h2>
      <div className="sidebar__link">
        <Link to={{ pathname: '/revenue', state: { data: 'helo' } }}>Revenue</Link>
      </div>
      <div className="sidebar__link">
        <Link to="/budget">Budget</Link>
      </div>
      <div className="sidebar__link">
        <Link to="/setup">Setup</Link>
      </div>
      <div className="sidebar__logout" onClick={handleClick} role="status">
        <i className="fa fa-power-off" />
        <Link to="/">Log out</Link>
      </div>
    </div>
  );
};

export default Sidebar;
