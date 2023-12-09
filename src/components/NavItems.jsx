import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex items-center sm:text-base">
      <ul className="flex p-4 m-4">
        <li className='px-4'><Link to="/"> Home</Link></li>
        <li className='px-4'><Link to="/contact-us"> Contact Us</Link></li>
        <li className='px-4'><Link to="/about-us"> About Us</Link></li>
        <li className='px-4'>
          <button type="button" className={!isLoggedIn ? 'btn login' : 'btn logout'} onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {!isLoggedIn ? 'Login' : 'Logout'}
          </button>
        </li>
      </ul>
    </div>
  );
};


export default NavItems;