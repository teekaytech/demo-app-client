/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import '../assets/stylesheets/dashboard.scss';
import { fetchUnit, endpoints } from '../utils/custom';

const User = () => {
  const [usr, setUsr] = useState({});
  const [err, setErr] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    try {
      const obj = JSON.parse(localStorage.getItem('userData'));
      setUsr(obj);
    } catch (error) { setErr(`Something went wrong: ${error}`); }
  }, []);

  useEffect(() => {
    try {
      (async () => {
        await fetchUnit(endpoints.summary, usr.type)
          .then((res) => setResult(res))
          .then((error) => setErr(error));
      })();
    } catch (error) {
      setErr(`Something went wrong: ${error}`);
    }
    return () => {
      setResult([]);
      setErr([]);
    };
  }, []);

  // const rev = parseInt(printTotal(result, 'revenue'), 10);
  // const bud = parseInt(printTotal(result, 'aop'), 10);
  if (result.length) console.log(result);
  if (err && err.length) return <main className="text-center m-5">{err}</main>;
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
              <span className="font-bold text-title">{}</span>
            </div>
          </div>

          <div className="p-card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true" />
            <div className="card_inner">
              <p className="text-primary-p">Budget KPI</p>
              <span className="font-bold text-title">{}</span>
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
                {}
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
              <span className="font-bold text-title">{}</span>
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
  );
};

export default User;
