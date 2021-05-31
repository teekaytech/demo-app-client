/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('userData'));
    setUser(obj);
  }, []);

  const handleClick = () => {
    localStorage.removeItem('userData');
  };

  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <span>{'<>'}</span>
          <h1>Demo App</h1>
        </div>
        <i className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home" />
          <Link to="/dashboard">Dashboard</Link>
        </div>
        { user.type === 'Admin'
          ? (
            <>
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
            </>
          )
          : ('') }
        <div className="sidebar__logout" onClick={handleClick} role="status">
          <i className="fa fa-power-off" />
          <Link to="/">Log out</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
