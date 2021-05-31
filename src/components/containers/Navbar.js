import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../assets/images/avatar.svg';

function Navbar() {
  const [userType, setUserType] = useState('');
  useEffect(() => {
    const obj = JSON.parse(localStorage.getItem('userData'));
    setUserType(obj.type);
  }, []);

  return (
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
        <Link to="/">
          <img width="30" src={Avatar} alt="user-icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
