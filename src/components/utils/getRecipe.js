export const getRecipe = async (recipeID, saveData = () => {}) => {
  try {
    if (
      process.env.REACT_APP_TASTY_API == "" ||
      process.env.REACT_APP_TASTY_API == "undefined" ||
      process.env.REACT_APP_TASTY_TOKEN == "" ||
      process.env.REACT_APP_TASTY_TOKEN == "undefined"
    ) {
      return [];
    }

    console.log(process.env.REACT_APP_TASTY_API);

    if (recipeID?.length === 0) return [];

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_TASTY_TOKEN,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    };

    const apiResponse = await fetch(
      `${process.env.REACT_APP_TASTY_API}/recipes/get-more-info?id=${recipeID}`,
      options
    );
    const recipeJson = await apiResponse.json();
    console.log(recipeJson);
    saveData(recipeJson);

    return recipeJson;
  } catch (error) {
    console.error(`Error fetching recipe: ${error.message}`);
  }
};

export default getRecipe;
