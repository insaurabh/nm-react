import { Link } from 'react-router-dom';
import ImageLoad from '../utils/ImageLoad';


const RecipeCard = ({ recipe }) => {
  return (
    <div className="restro-card m-4 p-4 w-[250px] bg-slate-100 hover:bg-green-50">
      <img
        src={recipe.thumbnail_url}
        className="restro-image min-h-[200px]"
        // loading="lazy"
        width="200"
        height="200"
        title={recipe.thumbnail_alt_text}
        alt={recipe.thumbnail_alt_text}
      />

      <h3 className='font-semibold py-2 text-l'>{recipe.name}</h3>
      <h4 className="restro-cousin">{recipe.keywords?.split(',').slice(0, 3).join()}</h4>
      <span className="restro-rating">4 :⭐ </span>
      <span className="restro-eta">{recipe?.total_time_tier?.display_time}</span>
      <Link to={`/recipe/${recipe.id}`}>More detail</Link>
    </div>
  );
};

export const promotedRecipeCard = (RecipeCard) => {
  return (props) => {
    return (
      <div className='promotedRecipe'>
        <span className='relative top-10 bg-green-800 text-white rounded-sm mx-4'>Promoted</span>
        <RecipeCard {...props} />
      </div>
    )

  }
}

export default RecipeCard;