import { useEffect, useState } from "react";
import getRecipe from '../utils/getRecipe';
import mockRecipeDetail from '../utils/mockRecipeDetail';

const useRecipe = (slug) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        let recipeDetails = getRecipe(slug);
        console.log('recipeDetails', recipeDetails)
        // setRecipe(recipeDetails?.recipe);
    }, []);

    return recipe;
}

export default useRecipe;