import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='tc pa2'>
            <input 
                className='pa3 w-50 w-60-m ba b--green bg-lightest-blue shadow-5 br3 tc' 
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    )
};
export default SearchBox;