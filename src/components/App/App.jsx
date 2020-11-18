import React, { Component } from 'react';
import Header from '../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import CardList from '../CardList/CardList';
import ErrorBoundry from '../ErrorBoundary/ErrorBoundry';

class App extends Component {
    state = {
        robots: [],
        searchfield: '',
    }
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => this.setState({ robots: users }))
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase()
                             .includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            return <h1 className="title">LOADING</h1>
        }
        return (
            <React.Fragment>
                <Header />
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </React.Fragment>
        );
    }
};
export default App;