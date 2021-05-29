/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../assets/stylesheets/dashboard.scss';
import { useLocation, Link } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.svg';

function Dashboard() {
  const location = useLocation();
  const { username, userType } = location.state.userData;

  return (
    <div className="p-container">
      <nav className="navbar">
        <div className="nav_icon">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="navbar__left">
          <a
            className="active_link"
            href="/dashboard"
          >
            {userType}
          </a>
        </div>
        <div className="navbar__right">
          <a href="">
            <img width="30" src={Avatar} alt="" />
          </a>
        </div>
      </nav>

      <main>
        <div className="main__container">
          {/* MAIN TITLE STARTS HERE */}
          <div className="main__title">
            <img src="assets/hello.svg" alt="" />
            <div className="main__greeting">
              <h1>
                Hello
                {' '}
                {username}
              </h1>
              <p>Welcome to your dashboard</p>
            </div>
          </div>
          {/* <!-- MAIN TITLE ENDS HERE -->

          <!-- MAIN CARDS STARTS HERE --> */}
          <div className="main__cards">
            <div className="p-card">
              <i
                className="fa fa-user-o fa-2x text-lightblue"
                aria-hidden="true"
              />
              <div className="card_inner">
                <p className="text-primary-p">Number of Subscribers</p>
                <span className="font-bold text-title">578</span>
              </div>
            </div>

            <div className="p-card">
              <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
              <div className="card_inner">
                <p className="text-primary-p">Times of Watching</p>
                <span className="font-bold text-title">2467</span>
              </div>
            </div>

            <div className="p-card">
              <i
                className="fa fa-video-camera fa-2x text-yellow"
                aria-hidden="true"
              />
              <div className="card_inner">
                <p className="text-primary-p">Number of Videos</p>
                <span className="font-bold text-title">340</span>
              </div>
            </div>

            <div className="p-card">
              <i
                className="fa fa-thumbs-up fa-2x text-green"
                aria-hidden="true"
              />
              <div className="card_inner">
                <p className="text-primary-p">Number of Likes</p>
                <span className="font-bold text-title">645</span>
              </div>
            </div>
          </div>
          {/* <!-- MAIN CARDS ENDS HERE -->

          <!-- CHARTS STARTS HERE --> */}
          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true" />
              </div>
              <div id="apex1" />
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Stats Reports</h1>
                  <p>Cupertino, California, USA</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true" />
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Income</h1>
                  <p>$75,300</p>
                </div>

                <div className="card2">
                  <h1>Sales</h1>
                  <p>$124,200</p>
                </div>

                <div className="card3">
                  <h1>Users</h1>
                  <p>3900</p>
                </div>

                <div className="card4">
                  <h1>Orders</h1>
                  <p>1881</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- CHARTS ENDS HERE --> */}
        </div>
      </main>

      <div id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <span>{'<>'}</span>
            <h1>Demo App</h1>
          </div>
          <i
            onClick="closeSidebar()"
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          />
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <i className="fa fa-home" />
            <a href="/dashboard">Dashboard</a>
          </div>
          <h2>OTHER FEATURES</h2>
          <div className="sidebar__link">
            <i className="fa fa-user-secret" aria-hidden="true" />
            <a href="#safwe">Feature 1</a>
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
  );
}

export default Dashboard;
