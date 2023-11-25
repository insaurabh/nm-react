import NavItems from "./NavItems";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/" >
          <img src="" alt="Ranjan Restro Logo" title="Ranjan Restro Logo" width="10px" height="10px" />
        </Link>
      </div>
      <NavItems />
    </div>
  );
};



export default Header;