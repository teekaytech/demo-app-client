/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import '../assets/stylesheets/dashboard.scss';
import { useLocation } from 'react-router-dom';
import { endpoints, fetchData } from '../utils/custom';
import ChartMap from './containers/Chart';

function Admin() {
  const location = useLocation();
  const { username } = location.state.userData;
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [revenues, setRevenues] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [summary, setSummary] = useState([]);

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
        await fetchData(endpoints.summary)
          .then((response) => setSummary(response))
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
              <span className="font-bold text-title">{commission}</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Reports Table</h1>
                <p>...loading</p>
                <ChartMap />
              </div>
              <i className="fa fa-usd" aria-hidden="true" />
            </div>
            <div id="apex1" />
          </div>

          <div className="charts__right">
            <div className="">
              <div>
                <h4>Other Stats Reports</h4>
                <p>...some other information we can derive from the data</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true" />
              <div>
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
                    {summary.length ? (
                      summary.map((sm) => (
                        <tr key={sm.id}>
                          <th scope="row">{sm.site_code}</th>
                          <td>{sm.date}</td>
                          <td>
                            {sm.revenue === null ? (0).toFixed(2) : sm.revenue}
                          </td>
                          <td>{sm.aop === null ? '0' : sm.aop}</td>
                          <td>
                            {sm.target === null ? '0.0%' : sm.target}
                          </td>
                          <td>
                            {sm.commission === null
                              ? (0).toFixed(2)
                              : sm.commission}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p className="text-center">loading...</p>
                    )}
                  </tbody>
                </table>
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
