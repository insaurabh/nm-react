import RestroCard from "./RestroCard";
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

export default Body;