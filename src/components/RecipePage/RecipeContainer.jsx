import RecipeCard, { promotedRecipeCard } from "./RecipeCard"
const RecipeContainer = ({ recipesData }) => {

  const PromotedRecipeCard = promotedRecipeCard(RecipeCard);
  console.log('recipesData', recipesData)
  return (
    <div className="restro-container flex flex-wrap hover:bg-slate-50">
      {
        recipesData?.results?.length > 0 && recipesData?.results.map(recipe => {
          if (recipe?.promotion == 'full') {
            console.log('recipe', recipe?.promotion == 'full')
            return <PromotedRecipeCard key={recipe.id} recipe={recipe} />
          } else {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          }
        })
      }
    </div>
  )

}

export default RecipeContainer;