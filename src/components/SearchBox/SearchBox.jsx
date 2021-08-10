import React from 'react';
import './searchbox.css';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="search-box">
            <input 
                className="search-input"
                type="search" 
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
};
export default SearchBox;