import { useEffect, useState } from 'react';

const SearchBar = ({ onSubmitHandler, loading }) => {
    const [searchedRecipe, setSearchedRecipe] = useState("");
    const searchHandler = (text) => {
        // console.log(text)
        setSearchedRecipe(text)
    }

    // useEffect(() => {
    //     console.log('useEffect called')
    // }, [searchedRecipe])
    // // const onSubmitHandler = () => {
    // //     console.log('onSubmitHandler called', searchedRecipe);
    // // }
    return (
        <div className="flex search-container my-4  justify-center">
            <input
                className='border border-solid shadow'
                key="recipe-search-input"
                type="search"
                placeholder="Search recipe"
                aria-label="Search recipe"
                onChange={(e) => searchHandler(e.target.value)}
                value={searchedRecipe}
            />
            <button className="px-4  py-0 bg-green-400"
                onClick={() => onSubmitHandler(searchedRecipe)}>
                {loading ? 'Fetching recipe' : 'Search recipe'}
            </button>
        </div>
    )
}

export default SearchBar;