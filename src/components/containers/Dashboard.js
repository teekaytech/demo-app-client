/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.svg';
import Admin from '../Admin';
import User from '../User';

function Dashboard() {
  const location = useLocation();
  const { userType } = location.state.userData;
  return (
    <>
      <div className="p-container">
        <nav className="navbar">
          <div className="nav_icon">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
          <div className="navbar__left">
            <a className="active_link" href="/dashboard">
              {userType === 'Admin' ? 'Administrator' : 'Users'}
            </a>
          </div>
          <div className="navbar__right">
            <a href="">
              <img width="30" src={Avatar} alt="" />
            </a>
          </div>
        </nav>
        <main>{userType === 'Admin' ? <Admin /> : <User />}</main>
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
              <a href="/dashboard">Dashboard</a>
            </div>
            <h2>OTHER FEATURES</h2>
            <div className="sidebar__link">
              <i className="fa fa-user-secret" aria-hidden="true" />
              <a href="#safwe">Commission Rate</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-building-o" />
              <a href="#sfawe">Feature 2</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-wrench" />
              <a href="#eawef">Feature 3</a>
            </div>
            <div className="sidebar__logout">
              <i className="fa fa-power-off" />
              <Link to="/">Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
