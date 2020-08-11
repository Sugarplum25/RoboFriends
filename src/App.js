import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Header from './Header';
import { robots } from './robots';

const App = () => {
    return (
        <div className='tc'>
            <Header />
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
};
export default App;