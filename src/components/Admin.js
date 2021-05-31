/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/dashboard.scss';
import { useLocation } from 'react-router-dom';
import {
  endpoints, fetchData, users, months, commaSeparated,
} from '../utils/custom';
import ChartMap from './containers/Chart';

function Admin() {
  const location = useLocation();
  const { username } = location.state.userData;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [revenues, setRevenues] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [summary, setSummary] = useState([]);
  const [filteredSummary, setFilteredSummary] = useState([]);
  const [user, setUser] = useState('');

  const renderData = (data) => {
    if (loading || data.length <= 0) return 'loading...';
    return data;
  };

  const formatDate = (dt) => new Date(dt).toDateString();

  useEffect(() => {
    try {
      setLoading(true);
      (async () => {
        await fetchData(endpoints.revenues)
          .then((response) => setRevenues(response))
          .catch((error) => setError(`${error.message}: Try again.`));
        await fetchData(endpoints.summary)
          .then((response) => { setSummary(response); setFilteredSummary(response); })
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
    data.forEach((element) => {
      const value = element[col] === null ? 0 : parseFloat(element[col]);
      sum += value;
    });
    return sum;
  };

  const printTotal = (datalist, col) => {
    let result = 0;
    if (datalist.length) result = summation(datalist, col);
    return result;
  };

  const revenue = parseInt(printTotal(summary, 'revenue'), 10);
  const budget = parseInt(printTotal(summary, 'aop'), 10);
  const targetAchieved = revenue / budget;
  const commission = parseInt(printTotal(summary, 'commission'), 10);
  const revenueChat = filteredSummary.length === 3
    ? filteredSummary.map((cd) => parseInt(cd.revenue, 10))
    : [];
  const commissionChat = filteredSummary.length === 3
    ? filteredSummary.map((cd) => parseInt(cd.commission, 10))
    : [];

  const commissionByMonth = (() => {
    let one = 0;
    let two = 0;
    let three = 0;
    summary.forEach((sm) => {
      switch (new Date(sm.date).getMonth()) {
        case 0:
          one += sm.commission && parseInt(sm.commission, 10);
          break;
        case 1:
          two += sm.commission && parseInt(sm.commission, 10);
          break;
        case 2:
          three += sm.commission && parseInt(sm.commission, 10);
          break;
        default:
          break;
      }
    });
    return [one, two, three];
  })();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'month') {
      if (value === '') {
        setFilteredSummary(summary);
      } else {
        setFilteredSummary(
          summary.filter((smr) => new Date(smr.date).getMonth() === parseInt(value, 10)),
        );
      }
    }
    if (name === 'seller') {
      if (value === '') {
        setFilteredSummary(summary);
      } else {
        setUser(value);
        setFilteredSummary(summary.filter((smr) => smr.site_code === value));
      }
    }
  };

  const renderChat = revenueChat.length || commissionChat.length ? (
    <div>
      {commissionChat.length && (
      <ChartMap data={commissionChat} title={`${user} Commission`} />
      )}
      {revenueChat.length && (
      <ChartMap data={revenueChat} title={`${user} Revenue`} />
      )}
    </div>
  ) : (
    <ChartMap data={commissionByMonth} title="Overall Comission" />
  );

  return (
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
              <span className="font-bold text-title">
                {commaSeparated(revenue)}
              </span>
            </div>
          </div>

          <div className="p-card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
            <div className="card_inner">
              <p className="text-primary-p">Budget KPI</p>
              <span className="font-bold text-title">
                {commaSeparated(budget)}
              </span>
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
                {`${(targetAchieved * 100).toFixed(1)}%`}
              </span>
            </div>
          </div>

          <div className="p-card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            />
            <div className="card_inner">
              <p className="text-primary-p">Commission</p>
              <span className="font-bold text-title">
                {commaSeparated(commission)}
              </span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Sellers Report Chart</h1>
                {renderChat}
              </div>
            </div>
            <div id="apex1" />
          </div>

          <div className="charts__right">
            <div className="">
              <div>
                <h4>Reports Summary</h4>
                <div className="d-flex justify-content-between">
                  <p>
                    Filter by month:
                    <select
                      className="form-control d-inline-block"
                      name="month"
                      onChange={handleChange}
                    >
                      <option value="">All</option>
                      {months.map((month, idx) => (
                        <option key={idx} value={idx}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    Filter by Seller:
                    <select
                      className="form-control d-inline-block"
                      name="seller"
                      onChange={handleChange}
                    >
                      <option value="">All</option>
                      {users.map((user, idx) => (
                        <option key={idx} value={user}>
                          {user}
                        </option>
                      ))}
                    </select>
                  </p>
                </div>
              </div>
              <i className="fa fa-usd" aria-hidden="true" />
              <div>
                {filteredSummary.length ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Site Code</th>
                        <th scope="col">Date</th>
                        <th scope="col">Revenue</th>
                        <th scope="col">AOP</th>
                        <th scope="col">Target</th>
                        <th scope="col">Commission</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSummary.map((sm) => (
                        <tr key={sm.id}>
                          <th scope="row">{sm.site_code}</th>
                          <td>{formatDate(sm.date)}</td>
                          <td>
                            {sm.revenue === null
                              ? (0).toFixed(2)
                              : commaSeparated(sm.revenue)}
                          </td>
                          <td>
                            {sm.aop === null ? '0' : commaSeparated(sm.aop)}
                          </td>
                          <td>{sm.target === null ? '0.0%' : sm.target}</td>
                          <td>
                            {sm.commission === null
                              ? (0).toFixed(2)
                              : commaSeparated(sm.commission)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center">loading...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {error}
    </main>
  );
}

export default Admin;
