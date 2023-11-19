import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav-items">
      <ul className="">
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/contact-us"> Contact Us</Link></li>
        <li><Link to="/about-us"> About Us</Link></li>
        <li>Cart</li>
        <li>
          <button type="button" className={!isLoggedIn ? 'btn login' : 'btn logout'} onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {!isLoggedIn ? 'Login' : 'Logout'}
          </button>
        </li>
      </ul>
    </div>
  );
};


export default NavItems;