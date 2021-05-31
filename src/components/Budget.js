/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Navbar from './containers/Navbar';
import Sidebar from './Sidebar';
import {
  fetchData,
  endpoints,
  formatDate,
  commaSeparated,
} from '../utils/custom';
import Filter from './Filter';

const Budget = () => {
  const [user, setUser] = useState({});
  const [budgets, setBudgets] = useState([]);
  const [filteredBud, setFilteredBud] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const obj = JSON.parse(localStorage.getItem('userData'));
      setUser(obj);
      (async () => {
        await fetchData(endpoints.budgets)
          .then((response) => {
            setBudgets(response);
            setFilteredBud(response);
          })
          .catch((error) => setError(`${error.message}: Try again.`));
      })();
    } catch (error) {
      setError(`Something went wrong: ${error}`);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e;
    if (name === 'month') {
      if (value === '') {
        setFilteredBud(budgets);
      } else {
        setFilteredBud(
          budgets.filter(
            (smr) => new Date(smr.date).getMonth() === parseInt(value, 10),
          ),
        );
      }
    }
    if (name === 'seller') {
      if (value === '') {
        setFilteredBud(budgets);
      } else {
        setUser(value);
        setFilteredBud(budgets.filter((smr) => smr.account === value));
      }
    }
  };

  if (error.length > 0) return <p className="text-center p-5">{error}</p>;
  return (
    <>
      <div className="p-container">
        <Navbar />
        <main>
          <div className="main__container">
            <div className="main__title">
              <img src="assets/hello.svg" alt="" />
              <div className="main__greeting">
                <h1>
                  Hello
                  {' '}
                  {user.name}
                </h1>
                <p>Welcome to Budgets Page</p>
              </div>
            </div>
            <div className="bg-white p-3">
              <h5 className="text-center my-3">All Sellers Budgets</h5>
              <Filter handleChange={handleChange} />
              {filteredBud.length ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Account</th>
                      <th scope="col">Date</th>
                      <th scope="col">AOP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBud.map((sm) => (
                      <tr key={sm.id}>
                        <th scope="row">{sm.id}</th>
                        <th>{sm.account}</th>
                        <td>{formatDate(sm.date)}</td>
                        <td>{sm.aop === null ? (0).toFixed(2) : sm.aop}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-center">loading...</p>
              )}
            </div>
          </div>
        </main>
        <Sidebar />
      </div>
    </>
  );
};
export default Budget;
