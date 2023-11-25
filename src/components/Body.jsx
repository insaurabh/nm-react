import SearchBar from "./inputs/SearchBar";
import CardShimmer from './Shimmers/Card';
import RecipeContainer from "./RecipePage/RecipeContainer";

import searchRecipes from './RecipePage/utils/searchRecipes';
import useRecipes from "./RecipePage/utils/useRecipes";
import LoaderStatus from "./utils/LoaderStatus";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const recipesData = useRecipes();
  const onSubmitHandler = (searchedRecipe) => {
    const recipes = searchRecipes(searchedRecipe, setRecipeData);
  }

  const onLineStatus = useOnlineStatus();

  if (false === onLineStatus) return <h1>Looks like you are offline.</h1>

  if (recipesData?.results?.length === 0 || recipesData?.length === 0) {
    return (
      <>
        <CardShimmer />
      </>
    )
  }

  return (
    <div className="body">
      <LoaderStatus />
      <SearchBar onSubmitHandler={onSubmitHandler} />
      <RecipeContainer recipesData={recipesData} />
    </div>
  );
};

export default Body;