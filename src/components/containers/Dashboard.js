/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Admin from '../Admin';
import Sidebar from '../Sidebar';
import User from '../User';
import Navbar from './Navbar';

const Dashboard = () => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('userData'));
    setUserType(obj.type);
  }, []);

  return (
    <>
      <div className="p-container">
        <Navbar />
        <main>{userType && userType === 'Admin' ? <Admin /> : <User />}</main>
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
