import { json } from "react-router-dom";
import { getRecipe } from './utils/getRecipe';
import getRecipes from "./utils/getRecipes";

const awaitTimeout = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const recipesLoader = async () => {
    const fetchRecipes = async () => {
        // await awaitTimeout(1000);
        return getRecipes();
    }
    const recipes = await fetchRecipes();
    return json(recipes);
}

export const recipeLoader = async (recipeID) => {
    if (typeof recipeID == 'undefined') return false;

    const fetchRecipe = async (recipeID) => {
        // await awaitTimeout(1000);
        return getRecipe(recipeID);
    }
    const recipe = await fetchRecipe(recipeID);

    return json(recipe);
}