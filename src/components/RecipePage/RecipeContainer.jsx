import RecipeCard from "./RecipeCard"
const RecipeContainer = ({ recipesData }) => (
  <div className="restro-container flex flex-wrap">
    {
      recipesData?.results?.length > 0 && recipesData?.results.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))
    }
  </div>
)

export default RecipeContainer;