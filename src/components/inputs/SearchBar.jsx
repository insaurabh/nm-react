import { useEffect, useState } from 'react';

const SearchBar = ({ onSubmitHandler }) => {
    const [searchedRecipe, setSearchedRecipe] = useState("");
    const searchHandler = (text) => {
        console.log(text)
        setSearchedRecipe(text)
    }

    useEffect(() => {
        console.log('useEffect called')
    }, [searchedRecipe])
    // const onSubmitHandler = () => {
    //     console.log('onSubmitHandler called', searchedRecipe);
    // }
    return (
        <div className="search-container mx-4 p-4 align-middle">
            <input
                className='border border-solid shadow m-4'
                key="recipe-search-input"
                type="search"
                placeholder="Search recipe"
                aria-label="Search recipe"
                onChange={(e) => searchHandler(e.target.value)}
                value={searchedRecipe}
            />
            <button className="px-4  py-0 bg-green-400" onClick={() => onSubmitHandler(searchedRecipe)}>Search recipe</button>
        </div>
    )
}

export default SearchBar;