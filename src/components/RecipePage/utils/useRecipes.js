import { useEffect, useState } from "react";
import { getRecipes } from './getRecipes';
import mockData from "./mockData";

const useRecipes = (slug) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // let recipes = getRecipes();
        // console.log('recipes', recipes)
        // setRecipes(recipes);

        setRecipes(mockData);
    }, []);

    return [recipes, setRecipes];
}

export default useRecipes;