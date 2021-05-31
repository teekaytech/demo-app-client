import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar__menu">
      <div className="sidebar__link active_menu_link">
        <i className="fa fa-home" />
        <a href="/dashboard">Dashboard</a>
      </div>
      <h2>OTHER FEATURES</h2>
      <div className="sidebar__link">
        <Link to="/revenue">Revenue</Link>
      </div>
      <div className="sidebar__link">
        <Link to="/budget">Budget</Link>
      </div>
      <div className="sidebar__link">
        <Link to="/setup">Setup</Link>
      </div>
      <div className="sidebar__logout">
        <i className="fa fa-power-off" />
        <Link to="/">Log out</Link>
      </div>
    </div>
  );
}

export default Sidebar;
