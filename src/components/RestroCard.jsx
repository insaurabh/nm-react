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

export default RestroCard;