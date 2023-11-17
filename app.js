import React from "react";
import ReactDOM from "react-dom/client";

const NavItems = () => {
  return (
    <div className="nav-items">
      <ul className="">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="" alt="Ranjan Restro Logo" title="Ranjan Restro Logo" />
      </div>
      <NavItems />
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="restro-card">
      <img
        className="restro-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a062b7046e8d291c9417a99e777cb121"
        alt="{RestroName} logo here"
      />
      <h3>Restro Name Here</h3>
      <h4 className="restro-cousin">Chinese, Snacks, Burgers</h4>
      <span className="restro-rating">4 :⭐ </span>
      <span className="restro-eta">40 minutes</span>
      <address>NIT</address>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search Bar</div>
      <div className="restro-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
