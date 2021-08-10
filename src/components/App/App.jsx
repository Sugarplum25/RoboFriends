import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import CardList from '../CardList/CardList';
import ErrorBoundry from '../ErrorBoundary/ErrorBoundry';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const onSearchChange = (e) => {
        setSearchField(e.target.value);
    };
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setRobots(users))
    }, []);
    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase()
                        .includes(searchField.toLowerCase());
    });
    if (!robots.length) {
        return <h1 className="title">LOADING</h1>
    }
    return (
        <React.Fragment>
            <Header />
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </React.Fragment>
    )
};
export default App;