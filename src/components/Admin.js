/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/dashboard.scss';
import { useLocation, Link } from 'react-router-dom';
import Avatar from '../assets/images/avatar.svg';
import { endpoints, fetchData } from '../utils/custom';

function Admin() {
  const location = useLocation();
  const { username } = location.state.userData;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [revenues, setRevenues] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const renderData = (data) => {
    if (loading || data.length <= 0) return 'loading...';
    return data;
  };

  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        await fetchData(endpoints.revenues)
          .then((response) => setRevenues(response))
          .catch((error) => setError(`${error.message}: Try again.`));
        await fetchData(endpoints.budgets)
          .then((response) => setBudgets(response))
          .catch((error) => setError(`${error.message}: Try again.`));
        setLoading(false);
      })();
    } catch (error) {
      setError(`Something went wrong: ${error}`);
    }
  }, []);

  const summation = (data, col) => {
    let sum = 0;
    data.forEach((element) => { sum += parseFloat(element[col]); });
    return sum;
  };

  const printTotal = (datalist, col) => {
    let result = 0;
    if (datalist.length) result = summation(datalist, col);
    return result;
  };

  const revenue = parseInt(printTotal(revenues, 'value'), 10);
  const budget = parseInt(printTotal(budgets, 'aop'), 10);
  const targetAchieved = revenue / budget;

  return (
    <div className="p-container">
      <nav className="navbar">
        <div className="nav_icon">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="navbar__left">
          <a className="active_link" href="/dashboard">
            Administrator
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
          <div className="main__title">
            <img src="assets/hello.svg" alt="" />
            <div className="main__greeting">
              <h1>
                Hello
                {' '}
                {renderData(username)}
              </h1>
              <p>Welcome to your dashboard</p>
            </div>
          </div>

          <div className="main__cards">
            <div className="p-card">
              <i
                className="fa fa-user-o fa-2x text-lightblue"
                aria-hidden="true"
              />
              <div className="card_inner">
                <h2 className="text-primary-p">Revenue KPI</h2>
                <span className="font-bold text-title">{revenue}</span>
              </div>
            </div>

            <div className="p-card">
              <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
              <div className="card_inner">
                <p className="text-primary-p">Budget KPI</p>
                <span className="font-bold text-title">{budget}</span>
              </div>
            </div>

            <div className="p-card">
              <i
                className="fa fa-video-camera fa-2x text-yellow"
                aria-hidden="true"
              />
              <div className="card_inner">
                <p className="text-primary-p">Target Achieved</p>
                <span className="font-bold text-title">
                  {targetAchieved.toFixed(4)}
                </span>
              </div>
            </div>

            <div className="p-card">
              <i
                className="fa fa-thumbs-up fa-2x text-green"
                aria-hidden="true"
              />
              <div className="card_inner">
                <p className="text-primary-p">Commission Rate</p>
                <span className="font-bold text-title">...10</span>
              </div>
            </div>
          </div>

          <div className="charts">
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Some Chat Reports</h1>
                  <p>...to be plotted</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true" />
              </div>
              <div id="apex1" />
            </div>

            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Other Stats Reports</h1>
                  <p>...some other information we can derive from the data</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true" />
              </div>

              <div className="charts__right__cards">
                <div className="card1">
                  <h1>Info 1</h1>
                  <p>...value</p>
                </div>

                <div className="card2">
                  <h1>Info 2</h1>
                  <p>...value</p>
                </div>

                <div className="card3">
                  <h1>Info 3</h1>
                  <p>... value</p>
                </div>

                <div className="card4">
                  <h1>Info 4</h1>
                  <p>...value</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <span>{'<>'}</span>
            <h1>Demo App</h1>
          </div>
          <i className="fa fa-times" id="sidebarIcon" aria-hidden="true" />
          {error}
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
  );
}

export default Admin;
