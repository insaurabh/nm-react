import NavItems from "./NavItems";
import { Link } from "react-router-dom";
import logo from './../components/assets/ranjan-restro.png'
const Header = () => {
  return (
    <div className="flex justify-between bg-green-700 shadow-lg">
      <div className="logo-container">
        <Link to="/" >
          <img src={logo}
            className="w-28"
            alt="Ranjan Restro Logo"
            title="Ranjan Restro Logo"
            width="10px"
            height="10px"
          />
        </Link>
      </div>
      <NavItems />
    </div>
  );
};



export default Header;