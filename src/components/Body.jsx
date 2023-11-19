import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getRecipe } from "./utils/getRecipes";
import searchRecipes from "./utils/searchRecipes";

import useApiRateLimiter from "./utils/apiLimmiter";
import mockData from "./utils/mockData";
import RecipeContainer from "./RecipeContainer";
import RecipeShimmer from "./Shimmers/Recipe";
import SearchBar from "./inputs/SearchBar";

const Body = () => {
  const [recipeData, setRecipeData] = useState([]);
  const apiLimiter = useApiRateLimiter();

  useEffect(() => {
    setRecipeData(mockData);
    // const data = getRecipe(setRecipeData);
    // console.log('usEffect called', recipeData, recipeData?.results);
  }, []);

    const onSubmitHandler = (searchedRecipe) => {
      console.log('onSubmitHandler called', searchedRecipe);
      const recipes = searchRecipes(searchedRecipe, setRecipeData);
    }


  if (recipeData.length === 0) {
    return <RecipeShimmer />
  }
    return (
      <div className="body">
        <SearchBar onSubmitHandler={onSubmitHandler}/>
        <RecipeContainer recipeData={recipeData}  />
      </div>
    );
};

export default Body;