import { useState } from 'react';
const NavItems = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav-items">
      <ul className="">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
        <li >
          <button type="button" className={!isLoggedIn ? 'btn login' : 'btn logout'} onClick={() => setIsLoggedIn(!isLoggedIn) }>
          {!isLoggedIn ? 'Login' : 'Logout'}
          </button>

        </li>
      </ul>
    </div>
  );
};


export default NavItems;