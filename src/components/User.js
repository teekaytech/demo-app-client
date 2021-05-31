/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import ChartMap from './containers/Chart';
import '../assets/stylesheets/dashboard.scss';
import {
  fetchUnit,
  endpoints,
  printTotal,
  commaSeparated,
  formatDate,
  months,
  commissionByMonth,
} from '../utils/custom';

const User = () => {
  const [usr, setUsr] = useState({});
  const [err, setErr] = useState('');
  const [result, setResult] = useState([]);
  const [filteredR, setFilteredR] = useState([]);

  useEffect(() => {
    try {
      const obj = JSON.parse(localStorage.getItem('userData'));
      setUsr(obj);
    } catch (error) { setErr(`Something went wrong: ${error}`); }
    return () => setUsr({});
  }, []);

  useEffect(() => {
    try {
      (async () => {
        await fetchUnit(endpoints.summary, usr.type)
          .then((response) => {
            setResult(response);
            setFilteredR(response);
          })
          .catch((error) => setErr(`${error.message}: Try again.`));
      })();
    } catch (error) {
      setErr(`Something went wrong: ${error}`);
    }
    return () => { setResult([]); setFilteredR([]); };
  }, [usr.type]);

  const rev = parseInt(printTotal(result, 'revenue'), 10);
  const bud = parseInt(printTotal(result, 'aop'), 10);
  const target = (rev / bud) * 100;
  const commission = parseInt(printTotal(result, 'commission'), 10);
  const commByMonth = commissionByMonth(result);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'month') {
      if (value === '') {
        setFilteredR(result);
      } else {
        setFilteredR(
          result.filter(
            (smr) => new Date(smr.date).getMonth() === parseInt(value, 10),
          ),
        );
      }
    }
  };

  if (err.length) return <main className="text-center m-5">{err}</main>;
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src="assets/hello.svg" alt="" />
          <div className="main__greeting">
            <h1>
              Hello
              {' '}
              {usr.name}
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
                {commaSeparated(rev)}
              </span>
            </div>
          </div>

          <div className="p-card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
            <div className="card_inner">
              <p className="text-primary-p">Budget KPI</p>
              <span className="font-bold text-title">
                {commaSeparated(bud)}
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
                {`${target.toFixed(1)}%`}
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
                <ChartMap data={commByMonth} title="Your Overall Comission" />
              </div>
            </div>
            <div id="apex1" />
          </div>

          <div className="charts__right">
            <div className="">
              <div>
                <h4>Reports Summary</h4>
                <div className="text-right">
                  <p className="d-inline-block">
                    Filter by month:
                    <select
                      className="col form-control"
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
                </div>
              </div>
              <i className="fa fa-usd" aria-hidden="true" />
              <div>
                {filteredR.length ? (
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
                      {filteredR.map((sm) => (
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
    </main>
  );
};

export default User;
