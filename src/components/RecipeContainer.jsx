import RecipeCard from "./RecipeCard"
const RecipeContainer = ({recipeData}) => (
    <div className="restro-container">
          {
            recipeData?.results?.length > 0 && recipeData?.results.map(recipe => (
              <RecipeCard key={recipe.id } recipe={recipe } />
            ))
        }
    </div>
)

export default RecipeContainer;