import { useEffect, useState } from 'react';
import SearchBar from "./inputs/SearchBar";
import CardShimmer from './Shimmers/Card';
import RecipeContainer from "./RecipePage/RecipeContainer";

import searchRecipes from './RecipePage/utils/searchRecipes';
import useRecipes from "./RecipePage/utils/useRecipes";
import LoaderStatus from "./utils/LoaderStatus";
import useOnlineStatus from "./utils/useOnlineStatus";


const Body = () => {
  const [recipes, setRecipes] = useRecipes();
  const [loading, setIsLoading] = useState(false);

  const onSubmitHandler = async (searchedRecipe) => {
    setIsLoading(true);
    const searchedRecipeData = await searchRecipes(searchedRecipe);

    if (searchedRecipeData?.results?.length) {
      setRecipes(searchedRecipeData)
    }

    setIsLoading(false);
  }

  const onLineStatus = useOnlineStatus();
  if (false === onLineStatus) return <h1>Looks like you are offline.</h1>

  if (recipes?.results?.length === 0 || recipes?.length === 0) {
    return (
      <>
        <CardShimmer />
      </>
    )
  }

  return (
    <div className="body">
      <LoaderStatus />
      <SearchBar onSubmitHandler={onSubmitHandler} loading={loading} />
      <RecipeContainer recipesData={recipes} />
    </div>
  );
};

export default Body;