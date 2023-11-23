import RecipeCard from "./RecipeCard"
const RecipeContainer = ({ recipesData }) => (
  <div className="restro-container">
    {
      recipesData?.results?.length > 0 && recipesData?.results.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))
    }
  </div>
)

export default RecipeContainer;