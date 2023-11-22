import { json, useParams } from "react-router-dom";
import mockRecipeDetail from '../utils/mockRecipeDetail';
import { getRecipe } from './../utils/getRecipe';
import getRecipes from "../utils/getRecipes";

const awaitTimeout = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export const recipesLoader = async () => {
    console.log('loader called')
    const fetchRecipes = async () => {
        // await awaitTimeout(1000);
        console.log('here')
        return getRecipes();
    }
    const recipes = await fetchRecipes();

    return json({ recipes });
}

export const recipeLoader = async (recipeID) => {
    console.log('recipeLoader loader called', recipeID)
    if (typeof recipeID == 'undefined') return false;

    const fetchRecipe = async (recipeID) => {
        // await awaitTimeout(1000);
        console.log('here')
        return getRecipe(recipeID);
    }
    const recipe = await fetchRecipe(recipeID);

    return json({ recipe });
}