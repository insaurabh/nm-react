/**
 * Pass recipe id and a callback in which fetched data will be sent.
 * @param  recipeID
 * @param  saveData
 * @returns
 */
export const getRecipe = async (recipeID, saveData = () => { }) => {
  try {
    if (
      process.env.REACT_APP_TASTY_API == "" ||
      process.env.REACT_APP_TASTY_API == "undefined" ||
      process.env.REACT_APP_TASTY_TOKEN == "" ||
      process.env.REACT_APP_TASTY_TOKEN == "undefined"
    ) {
      return [];
    }

    if (recipeID?.length === 0 || typeof recipeID == 'undefined') return [];

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
    // trigger callBack
    saveData(recipeJson);

    return recipeJson;
  } catch (error) {

    console.error(`Error fetching recipe: ${error.message}`);

    return []; // don't crash the project
  }
};

export default getRecipe;
