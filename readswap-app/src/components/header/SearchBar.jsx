import React from 'react';
import './searchbar.css'

function SearchBar({ searchValue, setSearchValue, handleSearchSubmit }) {
    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <form onSubmit={handleSearchSubmit}>
            <div className='search-elem'>
            <div className="search-bar-container">
                <input
                    placeholder="Search..."
                    className="searchtab"
                    value={searchValue}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-button">
                    SEARCH
                </button>
            </div>
            </div>
        </form>
    );
    
}

export default SearchBar;