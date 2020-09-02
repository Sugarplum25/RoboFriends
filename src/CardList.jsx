import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>);
    console.log(cardsArray);
    return (
        <div className="flex flex-wrap justify-center">
            {cardsArray}
        </div>
    );
};

export default CardList;