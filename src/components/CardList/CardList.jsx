import React from 'react';
import Card from '../Card/Card';
import './cardlist.css';
import { uniqueId } from 'lodash';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return (
        <Card key={uniqueId()} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        )
    });
    return (
        <div className="card-list">
            {cardsArray}
        </div>
    );
};

export default CardList;