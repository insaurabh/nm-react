import { useEffect, useState } from "react";
import { getRecipe } from "./utils/getRecipes";
import searchRecipes from "./utils/searchRecipes";

import useApiRateLimiter from "./utils/apiLimmiter";
import mockData from "./utils/mockData";
import RecipeShimmer from "./Shimmers/Recipe";
import SearchBar from "./inputs/SearchBar";
import CardShimmer from './Shimmers/Card';
import RecipeContainer from "./RecipePage/RecipeContainer";

import { useLoaderData, useNavigation, useFetchers, useRevalidator } from "react-router-dom";
const Body = () => {
  const [recipeData, setRecipeData] = useState([]);
  const apiLimiter = useApiRateLimiter();
  const loaderData = useLoaderData();

  let navigation = useNavigation();
  let fetchers = useFetchers()
  let revalidator = useRevalidator();
  let fetcherInProgress = fetchers.some((f) =>
    ["loading", "submitting"].includes(f.state)
  );

  console.log({ loaderData })
  useEffect(() => {
    setRecipeData(mockData);
    // const data = getRecipe(setRecipeData);
    // console.log('usEffect called', recipeData, recipeData?.results);
  }, []);

  const onSubmitHandler = (searchedRecipe) => {
    console.log('onSubmitHandler called', searchedRecipe);
    const recipes = searchRecipes(searchedRecipe, setRecipeData);
  }


  if (recipeData?.results?.length === 0 || recipeData?.length === 0) {
    return (
      <>
        <CardShimmer />
      </>
    )
  }

  return (
    <div className="body">
      {<div className="progress-bar">
        {navigation.state != 'idle' && <p>Navigation in progress...</p>}
        {revalidator.state !== "idle" && <p>Revalidation in progress...</p>}
        {fetcherInProgress && <p>Fetcher in progress...</p>}
      </div>}
      <SearchBar onSubmitHandler={onSubmitHandler} />
      <RecipeContainer recipeData={recipeData} />
    </div>
  );
};

export default Body;