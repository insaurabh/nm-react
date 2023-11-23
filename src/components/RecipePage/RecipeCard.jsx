import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="restro-card">
      <img
        className="restro-image"
        src={recipe.thumbnail_url}
        alt={recipe.thumbnail_alt_text}
      />
      <h3>{recipe.name}</h3>
      <h4 className="restro-cousin">{recipe.keywords?.split(',').slice(0, 3).join()}</h4>
      <span className="restro-rating">4 :⭐ </span>
      <span className="restro-eta">{recipe?.total_time_tier?.display_time}</span>
      <Link to={`/recipe/${recipe.id}`}>More detail</Link>
    </div>
  );
};

export default RecipeCard;